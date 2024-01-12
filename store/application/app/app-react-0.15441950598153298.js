
    
    customElements.define('app-react',
      class MyComponent extends HTMLElement{
        template = `<div style="padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;width:100%;"><my-button-459123774211029 _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"></my-button-459123774211029><line-chart-8792838580378208></line-chart-8792838580378208></div><my-api-5340709817414204 _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"></my-api-5340709817414204>`;
        constructor(){
          super();
          this.innerHTML = this.template;
        }
      }
    );
    class MyButton459123774211029 extends ButtonComponent{
               constructor(){
                   super();
                   this.disabled = false
this.ghost = false
this.loading = false
this.shape = ''
this.size = 'default'
this.type = 'primary'
this.block = false
this.danger = false
this.icon = 'search'
this.name = 'search'
               }
           }
           MyButton459123774211029.ɵcmp.factory = () => { return new MyButton459123774211029()};
           customElements.define('my-button-459123774211029',createCustomElement(MyButton459123774211029, {  injector: injector,}));
           class LineChart8792838580378208 extends LineChartComponent{
                    that;
                    constructor(){
                        super();
                        setTimeout(()=>{
                            let index = Object.keys(this).filter(key=>key.startsWith('__reactContainer'));
                            let ins = this.that = this[index[0]].child.stateNode;
                            ins.applyData({title : '',
width : '400px',
height : '200px',
xData : ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
series : [{"name":"销量","type":"line","data":[5,20,36,10,10,20,0]},{"name":"销量2","type":"line","data":[15,30,46,20,20,30]}],})
                        },300);
                    }
                    get config(){
                        console.log('config');
                    }
                    set config(value){
                        console.log('value',value)
                        const {title,xData,series} = value || {};
                        this.that.applyData({title,xData,series});
                    }   
                };
                customElements.define('line-chart-8792838580378208',LineChart8792838580378208);
                class MyAPI5340709817414204 extends APIComponent{
               constructor(){
                   super();
                   this.method = 'get'
this.api = 'https://www.fastmock.site/mock/14c2723aefa052a75b2a6feeed0cf387/suger/records'
               }
           }
           MyAPI5340709817414204.ɵcmp.factory = () => { return new MyAPI5340709817414204()};
           customElements.define('my-api-5340709817414204',createCustomElement(MyAPI5340709817414204, {  injector: injector,}));
           ;
            (()=>{
                const sourceDOM = document.querySelector('my-button-459123774211029'),
                    targetDOM = document.querySelector('my-api-5340709817414204'),
                    targetPath = (targetDOM.getAttribute('_methods')||'').split('.');
                sourceDOM.addEventListener('click', (e)=>{
                  let targetIns = targetPath.length ? targetPath.reduce((pre,key)=>key ? pre[key] : pre,targetDOM) : targetDOM;
                  targetIns['request']();
                });
            })();
              
            (()=>{
              const sourceDOM = document.querySelector('my-api-5340709817414204'),
                    targetDOM = document.querySelector('line-chart-8792838580378208'),
                    sourcePath = (sourceDOM.getAttribute('_data')||'').split('.'),
                    targetPath = (targetDOM.getAttribute('_data')||'').split('.');
              sourceDOM.addEventListener('success200',()=>{
                let sourceIns = sourcePath.length ? sourcePath.reduce((pre,key)=>key ? pre[key] : pre,sourceDOM) : sourceDOM,
                    targetIns = targetPath.length ? targetPath.reduce((pre,key)=>key ? pre[key] : pre,targetDOM) : targetDOM;
                targetIns['config'] = sourceIns['data'];
              })
            })();
          
    