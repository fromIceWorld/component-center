const express = require('express'),
    bodyParser = require('body-parser'),
    fs = require('fs'),
    path = require('path'),
    mongoose = require('mongoose'),
    multer = require('multer');

const hostname = '127.0.0.1',
    port = 3000;
const app = express();
const store = 'store';
app.use(bodyParser.urlencoded({ extended: false, limit: '10mb' }));
app.use(bodyParser.json({ limit: '10mb' }));
// 获取文件
app.all('/store/*', (req, res, next) => {
    const pathname = req._parsedUrl.pathname;
    if (/\.js|css$/.test(pathname)) {
        fs.readFile('./' + pathname, 'utf-8', (err, content) => {
            res.setHeader(
                'Content-Type',
                /\.js$/.test(pathname) ? 'text/javascript' : 'text/css'
            );
            res.header('Access-Control-Allow-Origin', '*');
            let code;
            if (err) {
                code = 404;
            } else {
                code = 200;
            }
            res.status(code).send(content);
        });
    } else if (/\.svg$/.test(pathname)) {
        fs.readFile('./' + req.pathname, 'utf-8', (err, content) => {
            res.setHeader('Content-Type', 'image/svg+xml');
            res.header('Access-Control-Allow-Origin', '*');
            let code;
            if (err) {
                code = 404;
            } else {
                code = 200;
            }
            res.status(code).send(content);
        });
    } else if (/\.woff|woff2|ttf$/.test(pathname)) {
        // 获取pathname
        fs.readFile('./' + pathname, 'binary', (err, content) => {
            res.setHeader('Content-Type', 'application/x-font-woff');
            res.header('Access-Control-Allow-Origin', '*');
            res.write(content, 'binary');
            res.send();
        });
    } else if (/\.png$/.test(pathname)) {
        // 获取pathname
        fs.readFile('./' + pathname, 'binary', (err, content) => {
            res.setHeader('Content-Type', 'application/x-font-woff');
            res.header('Access-Control-Allow-Origin', '*');
            res.write(content, 'binary');
            res.send();
        });
    } else {
        next();
    }
});
app.post('/publishApplication', (req, res) => {
    var getDirName = require('path').dirname;

    const { appName, tagName, script, logic, fileName, component } = req.body;
    let operate = [];
    operate.push(
        //@ts-ignore
        new Promise((resolve, reject) => {
            appModel.collection.insertMany(
                [{ script, tagName, appName, component }],
                (err, docs) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(docs);
                    }
                }
            );
        })
    );
    operate.push(
        //@ts-ignore
        new Promise((resolve, reject) => {
            let files = fs.readdirSync(store + '/application/');
            if (!files.includes(appName)) {
                fs.mkdirSync(store + '/application/' + appName);
            }
            fs.writeFile(
                store + '/application/' + appName + '/' + fileName,
                logic,
                (err) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve('');
                    }
                }
            );
        })
    );
    Promise.all(operate).then((success) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json({
            code: 200,
            data: {},
            message: '应用发布成功',
        });
    });
});
app.get('/public', (req, res) => {
    const schema = new mongoose.Schema({ _id: Number, name: String });
    const menu = mongoose.model('menu', schema);
    menu.find().then((res) => {
        console.log(res);
    });
    res.send('Hello World!');
});
// 应用列表
app.get('/application', (req, res) => {
    const { query } = req;
    const { appName } = query;
    appModel.findOne({ appName }).then((list) => {
        res.header({
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        });
        res.status(200).json({
            code: 200,
            data: list,
        });
    });
});
// 根据唯一标识tagName 查对应数据
app.get('/page', (req, res) => {
    const { query } = req;
    const { tagName } = query;
    appModel.findOne({ tagName: tagName }).then((list) => {
        res.header({
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        });
        res.status(200).json({
            code: 200,
            data: list,
        });
    });
});
const menuSchema = new mongoose.Schema({
    id: String,
    type: String,
    icon: String,
    title: String,
    view: Number,
    family: String,
    des: String,
    component: String,
    filesName: Array,
    area: String,
});
const menuModel = mongoose.model('Menu', menuSchema);
const systemMenuSchema = new mongoose.Schema({
    tagName: String,
    url: String,
    icon: String,
    label: String,
    children: Array,
});
const systemMenuModel = mongoose.model('systemmenus', systemMenuSchema);
const appSchema = new mongoose.Schema(
    {
        appName: String,
        tagName: String,
        script: Object,
        component: Object,
    },
    { minimize: false }
);
const appModel = mongoose.model('Application', appSchema);
const configSchema = new mongoose.Schema(
    {
        tagName: String,
        desc: String,
        json: String,
    },
    { minimize: false }
);
const configModel = mongoose.model('component-config', configSchema);
// 组件菜单
app.get('/menus', (req, res) => {
    menuModel.find().then((list) => {
        res.header({
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        });
        res.status(200).json({
            code: 200,
            data: list.map((item) => {
                item.area = store + '/' + item.area;
                return item;
            }),
        });
        // res.end();
    });
});
// 系统集成菜单
app.get('/systemMenus', (req, res) => {
    systemMenuModel.find().then((list) => {
        res.header({
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        });
        res.status(200).json({
            code: 200,
            data: list.map((item) => {
                item.area = store + '/' + item.area;
                return item;
            }),
        });
        // res.end();
    });
});
// 发布的组件
app.get('/component', (req, res) => {
    appModel.find().then((list) => {
        res.header({
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        });
        res.status(200).json({
            code: 200,
            data: list.map((item) => {
                const { tagName } = item;
                return {
                    label: tagName,
                    value: tagName,
                };
            }),
        });
        // res.end();
    });
});
// 上传 组件打包后的文件
const storage = multer.diskStorage({
    // 存储路径，此处为项目根目录下的 store 文件夹
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, 'store'));
    },
    // 文件名格式
    filename: function (req, file, cb) {
        console.log(file.originalname.lastIndexOf('.'));
        let extName = file.originalname.slice(
            file.originalname.lastIndexOf('.')
        );
        cb(null, extName);
    },
});
const upload = multer({
    storage: storage,
    limits: { fieldSize: 2 * 1024 * 1024 * 10000000000000 },
});

app.post('/upload', upload.array('files', 5000), (req, res) => {
    const { files, area, components } = req.body;
    const filesArray = JSON.parse(files),
        componentsArray = JSON.parse(components);
    let dataAndFilePromise = [];
    filesArray.forEach(({ fileName, content, dir }, index) => {
        dataAndFilePromise.push(
            // @ts-ignore
            new Promise((resolve, reject) => {
                fs.mkdirSync(store + '/' + area + '/' + dir, {
                    recursive: true,
                });
                fs.writeFile(
                    store + '/' + area + '/' + dir + '/' + fileName,
                    content,
                    (err) => {
                        if (err) {
                            console.error(err);
                            reject(err);
                        } else {
                            resolve(index);
                        }
                    }
                );
            })
        );
    });
    let validRepeat = new Promise((resolve, reject) => {
        let ids = componentsArray.map((item) => item.id);
        menuModel
            .find({
                id: new RegExp(`^(${ids.join('|')})$`),
            })
            .then((list) => {
                if (list.length > 0) {
                    reject(`重复的id:${list.map((item) => item.id)}`);
                } else {
                    menuModel.collection
                        .insertMany(componentsArray)
                        .then(() => {
                            resolve('插入数据成功');
                        })
                        .catch(() => {
                            reject('插入数据失败');
                        });
                }
            });
        console.log(ids);
    });
    validRepeat.then(
        () => {
            console.log('无重复项');
            // 插入数据，保存文件
            Promise.all(dataAndFilePromise).then(
                (success) => {
                    console.log('上传文件成功');
                    res.writeHead(200, {
                        'Content-Type': 'application/json',
                    });
                    res.end('成功');
                },
                (err) => {
                    console.log('上传文件失败');
                    res.writeHead(500, {
                        'Content-Type': 'application/json',
                    });
                    res.end(err);
                }
            );
        },
        (err) => {
            res.writeHead(500, {
                'Content-Type': 'application/json',
            });
            res.end(err);
        }
    );
});
// 保存系统菜单配置
app.post('/saveMenu', (req, res) => {
    const { menus } = req.body;
    systemMenuModel.collection.deleteMany({}, (err) => {
        systemMenuModel.collection.insertMany(menus, (an) => {
            res.status(200).json({
                code: 200,
                data: {},
            });
        });
    });
});
// 删除组件配置项
app.delete('/deleteConfig', (req, res) => {
    const { _id } = req.body;
    configModel.findOneAndDelete({ _id }).then((e) => {
        res.status(200).json({
            code: 200,
            data: {},
        });
    });
});
// 保存组件配置
app.post('/saveComponentConfig', (req, res) => {
    const { tagName, desc, json } = req.body;
    configModel.collection.insertMany([{ tagName, desc, json }], (an) => {
        res.status(200).json({
            code: 200,
            data: {},
        });
    });
});
// 保存组件配置列表
app.get('/getComponentConfig', (req, res) => {
    configModel.find().then((list) => {
        res.header({
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        });
        res.status(200).json({
            code: 200,
            data: list.map((item) => {
                item.area = store + '/' + item.area;
                return item;
            }),
        });
        // res.end();
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
// 连接数据库
const db_url =
    'mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false';
mongoose.connect(db_url);
mongoose.connection.on('connected', () => {
    console.log('连接成功：', db_url);
});
mongoose.connection.on('error', () => {
    console.log('连接失败：', db_url);
});
mongoose.connection.on('disconnection', () => {
    console.log('断开连接：', db_url);
});
