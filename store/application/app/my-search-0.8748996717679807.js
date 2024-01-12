
    
    customElements.define('my-search',
      class MyComponent extends HTMLElement{
        template = `<div style="display:flex;flex-direction:column;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;width:100%;"><div style="display:flex;flex-direction:row;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;width:100%;"><my-text-46532557657048934 _data="_ngElementStrategy.componentRef.instance"
                         _methods="_ngElementStrategy.componentRef.instance" 
                        style="font-size:14px;color:black;"></my-text-46532557657048934><my-input-9656600684663574 _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"
                    type="text" 
               ></my-input-9656600684663574><my-text-19498749903891222 _data="_ngElementStrategy.componentRef.instance"
                         _methods="_ngElementStrategy.componentRef.instance" 
                        style="font-size:14px;color:black;"></my-text-19498749903891222><my-radio-7083678783532676 _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"></my-radio-7083678783532676><my-text-077637623699778 _data="_ngElementStrategy.componentRef.instance"
                         _methods="_ngElementStrategy.componentRef.instance" 
                        style="font-size:14px;color:black;"></my-text-077637623699778><my-select-06611546424976189 _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"></my-select-06611546424976189><my-button-4259378230321793 _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"></my-button-4259378230321793><my-icon-5966431970502311 _data="_ngElementStrategy.componentRef.instance" 
                        _methods="_ngElementStrategy.componentRef.instance"></my-icon-5966431970502311></div><div style="padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;width:100%;"><my-table-5799069553206091 _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"></my-table-5799069553206091></div></div><my-api-42512475489811874 _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"></my-api-42512475489811874>`;
        constructor(){
          super();
          this.innerHTML = this.template;
        }
      }
    );
    class MyText46532557657048934 extends TextComponent{
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
          MyText46532557657048934.ɵcmp.factory = () => { return new MyText46532557657048934()};
          customElements.define('my-text-46532557657048934',createCustomElement(MyText46532557657048934, {  injector: injector,}));
          class MyInput9656600684663574 extends InputComponent{
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
        MyInput9656600684663574.ɵcmp.factory = () => { return new MyInput9656600684663574()};
        customElements.define('my-input-9656600684663574',createCustomElement(MyInput9656600684663574, {  injector: injector,}));
        class MyText19498749903891222 extends TextComponent{
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
          MyText19498749903891222.ɵcmp.factory = () => { return new MyText19498749903891222()};
          customElements.define('my-text-19498749903891222',createCustomElement(MyText19498749903891222, {  injector: injector,}));
          class MyRadio7083678783532676 extends RadioComponent{
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
        MyRadio7083678783532676.ɵcmp.factory = () => { return new MyRadio7083678783532676()};
        customElements.define('my-radio-7083678783532676',createCustomElement(MyRadio7083678783532676, {  injector: injector}));
        class MyText077637623699778 extends TextComponent{
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
          MyText077637623699778.ɵcmp.factory = () => { return new MyText077637623699778()};
          customElements.define('my-text-077637623699778',createCustomElement(MyText077637623699778, {  injector: injector,}));
          class MySelect06611546424976189 extends SelectComponent{
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
        MySelect06611546424976189.ɵcmp.factory = () => { return new MySelect06611546424976189()};
        customElements.define('my-select-06611546424976189',createCustomElement(MySelect06611546424976189, {  injector: injector}));
        class MyButton4259378230321793 extends ButtonComponent{
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
           MyButton4259378230321793.ɵcmp.factory = () => { return new MyButton4259378230321793()};
           customElements.define('my-button-4259378230321793',createCustomElement(MyButton4259378230321793, {  injector: injector,}));
           class MyIcon5966431970502311 extends IconComponent{
             constructor(){
                 super();
                 this['fontSize'] = '16px'
this['icon'] = '#icon-tubiao'
             }
         }
         MyIcon5966431970502311.ɵcmp.factory = () => { return new MyIcon5966431970502311()};
         customElements.define('my-icon-5966431970502311',createCustomElement(MyIcon5966431970502311, {  injector: injector}));
         class MyTable5799069553206091 extends TableComponent{
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
         MyTable5799069553206091.ɵcmp.factory = () => { return new MyTable5799069553206091()};
         customElements.define('my-table-5799069553206091',createCustomElement(MyTable5799069553206091, {  injector: injector,}));
         class MyAPI42512475489811874 extends RequestComponent{
               constructor(){
                   super(RequestComponent.httpCopy);
                   this.method = 'get'
this.api = 'https://www.fastmock.site/mock/14c2723aefa052a75b2a6feeed0cf387/suger/records'
               }
           }
           MyAPI42512475489811874.ɵcmp.factory = () => { return new MyAPI42512475489811874()};
           customElements.define('my-api-42512475489811874',createCustomElement(MyAPI42512475489811874, {  injector: injector,}));
           ;
            (()=>{
                const sourceDOM = document.querySelector('my-button-4259378230321793'),
                    targetDOM = document.querySelector('my-api-42512475489811874'),
                    targetPath = (targetDOM.getAttribute('_methods')||'').split('.');
                sourceDOM.addEventListener('click', (e)=>{
                  let targetIns = targetPath.length ? targetPath.reduce((pre,key)=>key ? pre[key] : pre,targetDOM) : targetDOM;
                  targetIns['request']();
                });
            })();
              
            (()=>{
              const sourceDOM = document.querySelector('my-api-42512475489811874'),
                    targetDOM = document.querySelector('my-table-5799069553206091'),
                    sourcePath = (sourceDOM.getAttribute('_data')||'').split('.'),
                    targetPath = (targetDOM.getAttribute('_data')||'').split('.');
              sourceDOM.addEventListener('success200',()=>{
                let sourceIns = sourcePath.length ? sourcePath.reduce((pre,key)=>key ? pre[key] : pre,sourceDOM) : sourceDOM,
                    targetIns = targetPath.length ? targetPath.reduce((pre,key)=>key ? pre[key] : pre,targetDOM) : targetDOM;
                targetIns['list'] = sourceIns['list'];
              })
            })();
          
          (()=>{
            const sourceDOM = document.querySelector('my-radio-7083678783532676'),
                  targetDOM = document.querySelector('my-api-42512475489811874'),
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
            const sourceDOM = document.querySelector('my-select-06611546424976189'),
                  targetDOM = document.querySelector('my-api-42512475489811874'),
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
            const sourceDOM = document.querySelector('my-input-9656600684663574'),
                  targetDOM = document.querySelector('my-api-42512475489811874'),
                  sourcePath = (sourceDOM.getAttribute('_data')||'').split('.'),
                  targetPath = (targetDOM.getAttribute('_methods')||'').split('.');
            let sourceIns = sourcePath.length ? sourcePath.reduce((pre,key)=>key ? pre[key] : pre,sourceDOM) : sourceDOM,
                targetIns = targetPath.length ? targetPath.reduce((pre,key)=>key ? pre[key] : pre,targetDOM) : targetDOM;   
            if(!targetIns['request'].params){
              targetIns['request'].params = []
            }
            targetIns['request'].params.push([sourceIns,["value"]]);
          })();  
          
    