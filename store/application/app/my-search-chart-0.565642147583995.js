
    
    customElements.define('my-search-chart',
      class MyComponent extends HTMLElement{
        template = `<div style="display:flex;flex-direction:column;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;width:100%;"><div style="display:flex;flex-direction:row;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;width:100%;"><my-text-16346983620168132 _data="_ngElementStrategy.componentRef.instance"
                         _methods="_ngElementStrategy.componentRef.instance" 
                        style="font-size:14px;color:black;"></my-text-16346983620168132><my-input-32907834836929273 _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"
                    type="text" 
               ></my-input-32907834836929273><my-text-19195210577471422 _data="_ngElementStrategy.componentRef.instance"
                         _methods="_ngElementStrategy.componentRef.instance" 
                        style="font-size:14px;color:black;"></my-text-19195210577471422><my-radio-540510042173244 _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"></my-radio-540510042173244><my-text-9385841243097932 _data="_ngElementStrategy.componentRef.instance"
                         _methods="_ngElementStrategy.componentRef.instance" 
                        style="font-size:14px;color:black;"></my-text-9385841243097932><my-select-882439924401248 _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"></my-select-882439924401248><my-icon-8941842267701121 _data="_ngElementStrategy.componentRef.instance" 
                        _methods="_ngElementStrategy.componentRef.instance"></my-icon-8941842267701121><my-button-5389642179786269 _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"></my-button-5389642179786269></div><div style="padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;width:100%;"><my-table-9793303014803336 _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"></my-table-9793303014803336></div><div style="display:flex;flex-direction:row;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;width:100%;"><line-chart-6117920512653161></line-chart-6117920512653161><line-chart-7640839271476005></line-chart-7640839271476005><line-chart-6452722522476946></line-chart-6452722522476946></div></div><my-api-7594838909684882 _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"></my-api-7594838909684882>`;
        constructor(){
          super();
          this.innerHTML = this.template;
        }
      }
    );
    class MyText16346983620168132 extends TextComponent{
              constructor(){
                  super();
                  this.text = '姓名'
                  this.dep();
              }
              dep(){
                setTimeout(()=>{
                  this.cd = this['__ngContext__'][13][0]._ngElementStrategy.componentRef.changeDetectorRef;
                });
              }
          }
          MyText16346983620168132.ɵcmp.factory = () => { return new MyText16346983620168132()};
          customElements.define('my-text-16346983620168132',createCustomElement(MyText16346983620168132, {  injector: injector,}));
          class MyInput32907834836929273 extends InputComponent{
            constructor(){
                super();
                this.placeholder="请输入姓名"
                this.control.reset('',{
                  updateOn:''
                });
                
                this.control.updateValueAndValidity();
                this.control.statusChanges.subscribe((res)=>{
                  if(res === 'VALID'){
                    this.validateTrue.emit();
                  }else{
                    this.validateFalse.emit();
                  }
                });
                this.dep();
             }
             get value() {
               return {name:this.control.value};
             }
             set value(target) {
               this.control.setValue(target);
             }
            dep(){
             setTimeout(()=>{
               this.cd = this['__ngContext__'][13][0]._ngElementStrategy.componentRef.changeDetectorRef;
             });
            }
        };
        MyInput32907834836929273.ɵcmp.factory = () => { return new MyInput32907834836929273()};
        customElements.define('my-input-32907834836929273',createCustomElement(MyInput32907834836929273, {  injector: injector,}));
        class MyText19195210577471422 extends TextComponent{
              constructor(){
                  super();
                  this.text = '性别'
                  this.dep();
              }
              dep(){
                setTimeout(()=>{
                  this.cd = this['__ngContext__'][13][0]._ngElementStrategy.componentRef.changeDetectorRef;
                });
              }
          }
          MyText19195210577471422.ɵcmp.factory = () => { return new MyText19195210577471422()};
          customElements.define('my-text-19195210577471422',createCustomElement(MyText19195210577471422, {  injector: injector,}));
          class MyRadio540510042173244 extends RadioComponent{
            constructor(){
                super();
                this.options = [{"label":"男","value":"男","checked":true},{"label":"女","value":"女","checked":false}];
                this.control = '男';
            }
            get value() {
              return {sex:this.control};
            }
            set value(target) {
              this.control = target;
            }
        }
        MyRadio540510042173244.ɵcmp.factory = () => { return new MyRadio540510042173244()};
        customElements.define('my-radio-540510042173244',createCustomElement(MyRadio540510042173244, {  injector: injector}));
        class MyText9385841243097932 extends TextComponent{
              constructor(){
                  super();
                  this.text = '朋友'
                  this.dep();
              }
              dep(){
                setTimeout(()=>{
                  this.cd = this['__ngContext__'][13][0]._ngElementStrategy.componentRef.changeDetectorRef;
                });
              }
          }
          MyText9385841243097932.ɵcmp.factory = () => { return new MyText9385841243097932()};
          customElements.define('my-text-9385841243097932',createCustomElement(MyText9385841243097932, {  injector: injector,}));
          class MySelect882439924401248 extends SelectComponent{
            constructor(){
                super(SelectComponent.copyHttp);
                this.options = [{"label":"男","value":"男","checked":false},{"label":"女","value":"女","checked":false}];
                this.selected = '';
                this.api = 'https://api.randomuser.me/?results=10';
                this.placeholder = '请选择';
                console.log(this.http);
                
            }
            get value() {
              return {friend:this.selected};
            }
            set value(target) {
              this.selected = target;
            }
        }
        MySelect882439924401248.ɵcmp.factory = () => { return new MySelect882439924401248()};
        customElements.define('my-select-882439924401248',createCustomElement(MySelect882439924401248, {  injector: injector}));
        class MyIcon8941842267701121 extends IconComponent{
             constructor(){
                 super();
                 this['fontSize'] = '16px'
this['icon'] = '#icon-tubiao'
             }
         }
         MyIcon8941842267701121.ɵcmp.factory = () => { return new MyIcon8941842267701121()};
         customElements.define('my-icon-8941842267701121',createCustomElement(MyIcon8941842267701121, {  injector: injector}));
         class MyButton5389642179786269 extends ButtonComponent{
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
                   this.dep();
                }
                dep(){
                  setTimeout(()=>{
                    this.cd = this['__ngContext__'][13][0]._ngElementStrategy.componentRef.changeDetectorRef;
                  });
                }
           }
           MyButton5389642179786269.ɵcmp.factory = () => { return new MyButton5389642179786269()};
           customElements.define('my-button-5389642179786269',createCustomElement(MyButton5389642179786269, {  injector: injector,}));
           class MyTable9793303014803336 extends TableComponent{
             constructor(){
                 super();
                 this.bordered = false
this.loading = false
this.pagination = false
this.sizeChanger = false
this.title = false
this.header = true
this.footer = false
this.expandable = false
this.checkbox = false
this.fixHeader = false
this.noResult = false
this.ellipsis = false
this.simple = false
this.size = 'default'
this.tableScroll = 'unset'
this.tableLayout = 'auto'
this.position = 'top'
this.headers = [{"label":"Name:100","key":"Name:100"},{"label":"Age:100","key":"Age:100"},{"label":"Address","key":"Address"}]
this.row = undefined;
                 this.dep();
             }
             dep(){
              setTimeout(()=>{
                this.cd = this['__ngContext__'][13][0]._ngElementStrategy.componentRef.changeDetectorRef;
              });
             }
             // 配置项
             get list() {
               return this.listOfData;
             }
             set list(data) {
               this.listOfData = data || [];
               this.check();
             }
         }
         MyTable9793303014803336.ɵcmp.factory = () => { return new MyTable9793303014803336()};
         customElements.define('my-table-9793303014803336',createCustomElement(MyTable9793303014803336, {  injector: injector,}));
         class LineChart6117920512653161 extends LineChartComponent{
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
series : [{"name":"销量","type":"line","data":[5,20,36,10,10,20,0]},{"name":"销量2","type":"line","data":[15,30,46,20,20,30,0]}],})
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
                customElements.define('line-chart-6117920512653161',LineChart6117920512653161);
                class LineChart7640839271476005 extends LineChartComponent{
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
series : [{"name":"销量","type":"line","data":[5,20,36,10,10,20,0]},{"name":"销量2","type":"line","data":[15,30,46,20,20,30,0]}],})
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
                customElements.define('line-chart-7640839271476005',LineChart7640839271476005);
                class LineChart6452722522476946 extends LineChartComponent{
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
series : [{"name":"销量","type":"line","data":[5,20,36,10,10,20,0]},{"name":"销量2","type":"line","data":[15,30,46,20,20,30,0]}],})
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
                customElements.define('line-chart-6452722522476946',LineChart6452722522476946);
                class MyAPI7594838909684882 extends RequestComponent{
               constructor(){
                   super(RequestComponent.httpCopy);
                   this.method = 'get'
this.api = 'https://www.fastmock.site/mock/14c2723aefa052a75b2a6feeed0cf387/suger/records'
               }
           }
           MyAPI7594838909684882.ɵcmp.factory = () => { return new MyAPI7594838909684882()};
           customElements.define('my-api-7594838909684882',createCustomElement(MyAPI7594838909684882, {  injector: injector,}));
           ;
            (()=>{
                const sourceDOM = document.querySelector('my-button-5389642179786269'),
                    targetDOM = document.querySelector('my-api-7594838909684882'),
                    targetPath = (targetDOM.getAttribute('_methods')||'').split('.');
                sourceDOM.addEventListener('click', (e)=>{
                  let targetIns = targetPath.length ? targetPath.reduce((pre,key)=>key ? pre[key] : pre,targetDOM) : targetDOM;
                  targetIns['request']();
                });
            })();
              
            (()=>{
              const sourceDOM = document.querySelector('my-api-7594838909684882'),
                    targetDOM = document.querySelector('my-table-9793303014803336'),
                    sourcePath = (sourceDOM.getAttribute('_data')||'').split('.'),
                    targetPath = (targetDOM.getAttribute('_data')||'').split('.');
              sourceDOM.addEventListener('success200',()=>{
                let sourceIns = sourcePath.length ? sourcePath.reduce((pre,key)=>key ? pre[key] : pre,sourceDOM) : sourceDOM,
                    targetIns = targetPath.length ? targetPath.reduce((pre,key)=>key ? pre[key] : pre,targetDOM) : targetDOM;
                targetIns['list'] = sourceIns['list'];
              })
            })();
          
          (()=>{
            const sourceDOM = document.querySelector('my-radio-540510042173244'),
                  targetDOM = document.querySelector('my-api-7594838909684882'),
                  sourcePath = (sourceDOM.getAttribute('_data')||'').split('.'),
                  targetPath = (targetDOM.getAttribute('_methods')||'').split('.');
            let sourceIns = sourcePath.length ? sourcePath.reduce((pre,key)=>key ? pre[key] : pre,sourceDOM) : sourceDOM,
                targetIns = targetPath.length ? targetPath.reduce((pre,key)=>key ? pre[key] : pre,targetDOM) : targetDOM;   
            if(!targetIns['request'].params){
              targetIns['request'].params = []
            }
            targetIns['request'].params.push([sourceIns,["value"]]);
          })();  
          
          (()=>{
            const sourceDOM = document.querySelector('my-select-882439924401248'),
                  targetDOM = document.querySelector('my-api-7594838909684882'),
                  sourcePath = (sourceDOM.getAttribute('_data')||'').split('.'),
                  targetPath = (targetDOM.getAttribute('_methods')||'').split('.');
            let sourceIns = sourcePath.length ? sourcePath.reduce((pre,key)=>key ? pre[key] : pre,sourceDOM) : sourceDOM,
                targetIns = targetPath.length ? targetPath.reduce((pre,key)=>key ? pre[key] : pre,targetDOM) : targetDOM;   
            if(!targetIns['request'].params){
              targetIns['request'].params = []
            }
            targetIns['request'].params.push([sourceIns,["value"]]);
          })();  
          
          (()=>{
            const sourceDOM = document.querySelector('my-input-32907834836929273'),
                  targetDOM = document.querySelector('my-api-7594838909684882'),
                  sourcePath = (sourceDOM.getAttribute('_data')||'').split('.'),
                  targetPath = (targetDOM.getAttribute('_methods')||'').split('.');
            let sourceIns = sourcePath.length ? sourcePath.reduce((pre,key)=>key ? pre[key] : pre,sourceDOM) : sourceDOM,
                targetIns = targetPath.length ? targetPath.reduce((pre,key)=>key ? pre[key] : pre,targetDOM) : targetDOM;   
            if(!targetIns['request'].params){
              targetIns['request'].params = []
            }
            targetIns['request'].params.push([sourceIns,["value"]]);
          })();  
          
    