
    
    customElements.define('my-search-drop-hook',
      class MyComponent extends HTMLElement{
        template = `<div style="padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;width:100%;"><div style="display:flex;flex-direction:row;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;width:100%;"><my-input-4153873096099203 _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"
                    type="text" 
               ></my-input-4153873096099203><my-select-0077269790427925145 _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"></my-select-0077269790427925145><my-button-8675094497040949 _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"></my-button-8675094497040949></div><div style="padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;width:100%;"><my-table-694008732896751 _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"></my-table-694008732896751></div></div><my-api-7198418766013812 _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"></my-api-7198418766013812><my-hook-4819269714400103 _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"></my-hook-4819269714400103>`;
        constructor(){
          super();
          this.innerHTML = this.template;
        }
      }
    );
    class MyInput4153873096099203 extends InputComponent{
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
        MyInput4153873096099203.ɵcmp.factory = () => { return new MyInput4153873096099203()};
        customElements.define('my-input-4153873096099203',createCustomElement(MyInput4153873096099203, {  injector: injector,}));
        class MySelect0077269790427925145 extends SelectComponent{
            constructor(){
                super(SelectComponent.copyHttp);
                this.options = [{"label":"男","value":"男","checked":false},{"label":"女","value":"女","checked":false}];
                this.selected = '';
                this.api = 'https://api.randomuser.me/?results=10';
                this.placeholder = '请选择';
                console.log(this.http);
                this.loadMore();
            }
            get value() {
              return {sex:this.selected};
            }
            set value(target) {
              this.selected = target;
            }
        }
        MySelect0077269790427925145.ɵcmp.factory = () => { return new MySelect0077269790427925145()};
        customElements.define('my-select-0077269790427925145',createCustomElement(MySelect0077269790427925145, {  injector: injector}));
        class MyButton8675094497040949 extends ButtonComponent{
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
           MyButton8675094497040949.ɵcmp.factory = () => { return new MyButton8675094497040949()};
           customElements.define('my-button-8675094497040949',createCustomElement(MyButton8675094497040949, {  injector: injector,}));
           class MyTable694008732896751 extends TableComponent{
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
         MyTable694008732896751.ɵcmp.factory = () => { return new MyTable694008732896751()};
         customElements.define('my-table-694008732896751',createCustomElement(MyTable694008732896751, {  injector: injector,}));
         class MyAPI7198418766013812 extends RequestComponent{
               constructor(){
                   super(RequestComponent.httpCopy);
                   this.method = 'get'
this.api = 'https://www.fastmock.site/mock/14c2723aefa052a75b2a6feeed0cf387/suger/records'
               }
           }
           MyAPI7198418766013812.ɵcmp.factory = () => { return new MyAPI7198418766013812()};
           customElements.define('my-api-7198418766013812',createCustomElement(MyAPI7198418766013812, {  injector: injector,}));
           class MyHook4819269714400103 extends HookComponent{
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
           MyHook4819269714400103.ɵcmp.factory = () => { return new MyHook4819269714400103()};
           customElements.define('my-hook-4819269714400103',createCustomElement(MyHook4819269714400103, {  injector: injector,}));
           ;
            (()=>{
                const sourceDOM = document.querySelector('my-button-8675094497040949'),
                    targetDOM = document.querySelector('my-api-7198418766013812'),
                    targetPath = (targetDOM.getAttribute('_methods')||'').split('.');
                sourceDOM.addEventListener('click', (e)=>{
                  let targetIns = targetPath.length ? targetPath.reduce((pre,key)=>key ? pre[key] : pre,targetDOM) : targetDOM;
                  targetIns['request']();
                });
            })();
              
            (()=>{
              const sourceDOM = document.querySelector('my-api-7198418766013812'),
                    targetDOM = document.querySelector('my-table-694008732896751'),
                    sourcePath = (sourceDOM.getAttribute('_data')||'').split('.'),
                    targetPath = (targetDOM.getAttribute('_data')||'').split('.');
              sourceDOM.addEventListener('success200',()=>{
                let sourceIns = sourcePath.length ? sourcePath.reduce((pre,key)=>key ? pre[key] : pre,sourceDOM) : sourceDOM,
                    targetIns = targetPath.length ? targetPath.reduce((pre,key)=>key ? pre[key] : pre,targetDOM) : targetDOM;
                targetIns['list'] = sourceIns['list'];
              })
            })();
          
            (()=>{
                const sourceDOM = document.querySelector('my-hook-4819269714400103'),
                    targetDOM = document.querySelector('my-api-7198418766013812'),
                    targetPath = (targetDOM.getAttribute('_methods')||'').split('.');
                sourceDOM.addEventListener('connectedCallback', (e)=>{
                  let targetIns = targetPath.length ? targetPath.reduce((pre,key)=>key ? pre[key] : pre,targetDOM) : targetDOM;
                  targetIns['request']();
                });
            })();
              
          (()=>{
            const sourceDOM = document.querySelector('my-input-4153873096099203'),
                  targetDOM = document.querySelector('my-api-7198418766013812'),
                  sourcePath = (sourceDOM.getAttribute('_data')||'').split('.'),
                  targetPath = (targetDOM.getAttribute('_methods')||'').split('.');
            let sourceIns = sourcePath.length ? sourcePath.reduce((pre,key)=>key ? pre[key] : pre,sourceDOM) : sourceDOM,
                targetIns = targetPath.length ? targetPath.reduce((pre,key)=>key ? pre[key] : pre,targetDOM) : targetDOM;   
            if(!targetIns['request'].params){
              targetIns['request'].params = []
            }
            targetIns['request'].params.push([sourceIns,["value"]]);
          })();  
          
    