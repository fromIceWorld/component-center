const express = require('express'),
    bodyParser = require('body-parser');
const fs = require('fs');
const mongoose = require('mongoose');

const hostname = '127.0.0.1',
    port = 3000;
const app = express();
const store = 'store';
app.use(bodyParser.urlencoded({ extended: false, limit: '10mb' }));
app.use(bodyParser.json({ limit: '10mb' }));
// 文件请求
app.all('/store/*', (req, res, next) => {
    const { originalUrl } = req;
    if (/\.js|css$/.test(originalUrl)) {
        console.log(req.originalUrl);
        fs.readFile('./' + req.originalUrl, 'utf-8', (err, content) => {
            res.setHeader('Content-Type', 'text/javascript');
            let code;
            if (err) {
                code = 404;
            } else {
                code = 200;
            }
            res.status(code).send(content);
        });
    } else {
        next();
    }
});
app.get('/public', (req, res) => {
    const schema = new mongoose.Schema({ _id: Number, name: String });
    const menu = mongoose.model('menu', schema);
    menu.find().then((res) => {
        console.log(res);
    });
    res.send('Hello World!');
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
app.get('/menus', (req, res) => {
    menuModel.find().then((list) => {
        console.log(list);
        res.setHeader('Content-Type', 'application/json');
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
app.post('/upload', (req, res) => {
    const { content, components, area } = req.body.data;
    console.log(components, area);
    let dataAndFilePromise = [];
    content.forEach(({ fileName, content }, index) => {
        dataAndFilePromise.push(
            // @ts-ignore
            new Promise((resolve, reject) => {
                fs.writeFile(
                    store + '/' + area + '/' + fileName,
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
    dataAndFilePromise.push(
        // @ts-ignore
        new Promise((resolve, reject) => {
            menuModel.collection.insertMany(components, (err, docs) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(docs);
                }
            });
        })
    );
    // 插入数据，保存文件
    Promise.all(dataAndFilePromise).then(
        (success) => {
            res.writeHead(200, {
                'Content-Type': 'application/json',
            });
            res.end();
        },
        (err) => {
            res.writeHead(500, {
                'Content-Type': 'application/json',
            });
            res.end();
        }
    );
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
