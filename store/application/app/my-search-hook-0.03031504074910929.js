
    
    customElements.define('my-search-hook',
      class MyComponent extends HTMLElement{
        template = `<div style="padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;width:100%;"><div style="display:flex;flex-direction:row;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;width:100%;"><my-input-32881934959208636 _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"
                    type="text" 
               ></my-input-32881934959208636><my-button-7670713930703408 _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"></my-button-7670713930703408></div><div style="padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;width:100%;"><my-table-08117382285424046 _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"></my-table-08117382285424046></div></div><my-api-07409724202995949 _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"></my-api-07409724202995949><my-hook-7108461501880456 _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"></my-hook-7108461501880456>`;
        constructor(){
          super();
          this.innerHTML = this.template;
        }
      }
    );
    class MyInput32881934959208636 extends InputComponent{
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
        MyInput32881934959208636.ɵcmp.factory = () => { return new MyInput32881934959208636()};
        customElements.define('my-input-32881934959208636',createCustomElement(MyInput32881934959208636, {  injector: injector,}));
        class MyButton7670713930703408 extends ButtonComponent{
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
           MyButton7670713930703408.ɵcmp.factory = () => { return new MyButton7670713930703408()};
           customElements.define('my-button-7670713930703408',createCustomElement(MyButton7670713930703408, {  injector: injector,}));
           class MyTable08117382285424046 extends TableComponent{
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
this.row = 10;
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
         MyTable08117382285424046.ɵcmp.factory = () => { return new MyTable08117382285424046()};
         customElements.define('my-table-08117382285424046',createCustomElement(MyTable08117382285424046, {  injector: injector,}));
         class MyAPI07409724202995949 extends RequestComponent{
               constructor(){
                   super(RequestComponent.httpCopy);
                   this.method = 'get'
this.api = 'https://www.fastmock.site/mock/14c2723aefa052a75b2a6feeed0cf387/suger/records'
               }
           }
           MyAPI07409724202995949.ɵcmp.factory = () => { return new MyAPI07409724202995949()};
           customElements.define('my-api-07409724202995949',createCustomElement(MyAPI07409724202995949, {  injector: injector,}));
           class MyHook7108461501880456 extends HookComponent{
               constructor(){
                   super();
                   this.delay = 0
this.count = 1
this.interval = 1;
                   if (this.delay) {
                      setTimeout(() => {
                        this.runAndEmit();
                      }, this.delay);
                    } else {
                      this.runAndEmit();
                    }
               }
               connectedCallback(){
                console.log('connectedCallback')
               }
           }
           MyHook7108461501880456.ɵcmp.factory = () => { return new MyHook7108461501880456()};
           customElements.define('my-hook-7108461501880456',createCustomElement(MyHook7108461501880456, {  injector: injector,}));
           ;
            (()=>{
                const sourceDOM = document.querySelector('my-button-7670713930703408'),
                    targetDOM = document.querySelector('my-api-07409724202995949'),
                    targetPath = (targetDOM.getAttribute('_methods')||'').split('.');
                sourceDOM.addEventListener('click', (e)=>{
                  let targetIns = targetPath.length ? targetPath.reduce((pre,key)=>key ? pre[key] : pre,targetDOM) : targetDOM;
                  targetIns['request']();
                });
            })();
              
            (()=>{
              const sourceDOM = document.querySelector('my-api-07409724202995949'),
                    targetDOM = document.querySelector('my-table-08117382285424046'),
                    sourcePath = (sourceDOM.getAttribute('_data')||'').split('.'),
                    targetPath = (targetDOM.getAttribute('_data')||'').split('.');
              sourceDOM.addEventListener('success200',()=>{
                let sourceIns = sourcePath.length ? sourcePath.reduce((pre,key)=>key ? pre[key] : pre,sourceDOM) : sourceDOM,
                    targetIns = targetPath.length ? targetPath.reduce((pre,key)=>key ? pre[key] : pre,targetDOM) : targetDOM;
                targetIns['list'] = sourceIns['list'];
              })
            })();
          
            (()=>{
                const sourceDOM = document.querySelector('my-hook-7108461501880456'),
                    targetDOM = document.querySelector('my-api-07409724202995949'),
                    targetPath = (targetDOM.getAttribute('_methods')||'').split('.');
                sourceDOM.addEventListener('connectedCallback', (e)=>{
                  let targetIns = targetPath.length ? targetPath.reduce((pre,key)=>key ? pre[key] : pre,targetDOM) : targetDOM;
                  targetIns['request']();
                });
            })();
              
          (()=>{
            const sourceDOM = document.querySelector('my-input-32881934959208636'),
                  targetDOM = document.querySelector('my-api-07409724202995949'),
                  sourcePath = (sourceDOM.getAttribute('_data')||'').split('.'),
                  targetPath = (targetDOM.getAttribute('_methods')||'').split('.');
            let sourceIns = sourcePath.length ? sourcePath.reduce((pre,key)=>key ? pre[key] : pre,sourceDOM) : sourceDOM,
                targetIns = targetPath.length ? targetPath.reduce((pre,key)=>key ? pre[key] : pre,targetDOM) : targetDOM;   
            if(!targetIns['request'].params){
              targetIns['request'].params = []
            }
            targetIns['request'].params.push([sourceIns,["value"]]);
          })();  
          
    