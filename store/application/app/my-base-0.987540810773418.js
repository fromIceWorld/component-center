
    
    customElements.define('my-base',
      class MyComponent extends HTMLElement{
        template = `<div style="display:flex;flex-direction:column;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;width:100%;"><div style="display:flex;flex-direction:row;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;width:100%;"><my-text-1 _data="_ngElementStrategy.componentRef.instance"
                         _methods="_ngElementStrategy.componentRef.instance" 
                        style="font-size:14px;color:black;"></my-text-1><my-input-1 _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"
                    type="text" 
               ></my-input-1><my-button-1 _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"></my-button-1></div><div style="display:flex;flex-direction:;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;width:100%;"><my-table-1 _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"></my-table-1></div></div><my-api-1 _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"></my-api-1>`;
        constructor(){
          super();
          this.innerHTML = this.template;
        }
      }
    );
    class MyText1 extends TextComponent{
              constructor(){
                  super();
                  this.text = '姓名'
              }
          }
          MyText1.ɵcmp.factory = () => { return new MyText1()};
          customElements.define('my-text-1',createCustomElement(MyText1, {  injector: injector,}));
          class MyInput1 extends InputComponent{
            constructor(){
                super();
                this.placeholder="请输入姓名"
                this.control.reset('',{
                  updateOn:'change',
                });
                this.control.setValidators([this.Validators.pattern(/^[1-9]{1,10}$/),this.Validators.required]);
                this.control.updateValueAndValidity();
                this.control.statusChanges.subscribe((res)=>{
                  if(res === 'VALID'){
                    this.validateTrue.emit();
                  }else{
                    this.validateFalse.emit();
                  }
                })
             }
             get value() {
               return {name:this.control.value};
             }
             set value(target) {
               this.control.setValue(target);
             }
        };
        MyInput1.ɵcmp.factory = () => { return new MyInput1()};
        customElements.define('my-input-1',createCustomElement(MyInput1, {  injector: injector,}));
        class MyButton1 extends ButtonComponent{
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
           MyButton1.ɵcmp.factory = () => { return new MyButton1()};
           customElements.define('my-button-1',createCustomElement(MyButton1, {  injector: injector,}));
           class MyTable1 extends TableComponent{
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
this.headers = [{"label":"Name:100","key":"Name:100"},{"label":"Age:100","key":"Age:100"},{"label":"Address:200","key":"Address:200"}]
this.row = undefined
             }
             // 配置项
             get list() {
               return this.listOfData;
             }
             set list(data) {
               this.listOfData = data;
               this.check();
             }
         }
         MyTable1.ɵcmp.factory = () => { return new MyTable1()};
         customElements.define('my-table-1',createCustomElement(MyTable1, {  injector: injector,}));
         class MyAPI1 extends APIComponent{
               constructor(){
                   super();
                   this.method = 'get'
this.api = 'https://www.fastmock.site/mock/14c2723aefa052a75b2a6feeed0cf387/suger/records'
               }
           }
           MyAPI1.ɵcmp.factory = () => { return new MyAPI1()};
           customElements.define('my-api-1',createCustomElement(MyAPI1, {  injector: injector,}));
           ;
            (()=>{
                const sourceDOM = document.querySelector('my-button-1'),
                    targetDOM = document.querySelector('my-api-1'),
                    targetPath = (targetDOM.getAttribute('_methods')||'').split('.');
                let targetIns = targetPath.reduce((pre,key)=>pre[key],targetDOM);
                sourceDOM.addEventListener('click', (e)=>{
                  targetIns['request']();
                });
            })();
              
            (()=>{
              const sourceDOM = document.querySelector('my-api-1'),
                    targetDOM = document.querySelector('my-table-1'),
                    sourcePath = (sourceDOM.getAttribute('_data')||'').split('.'),
                    targetPath = (targetDOM.getAttribute('_data')||'').split('.');
              let sourceIns = sourcePath.reduce((pre,key)=>pre[key],sourceDOM),
                  targetIns = targetPath.reduce((pre,key)=>pre[key],targetDOM);      
              sourceDOM.addEventListener('success200',()=>{
                targetIns['list'] = sourceIns['data'];
              })
            })();
          
    