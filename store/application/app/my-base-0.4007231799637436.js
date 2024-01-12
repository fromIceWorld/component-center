
    
    customElements.define('my-base',
      class MyComponent extends HTMLElement{
        template = `<div style="display:flex;flex-direction:column;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;width:100%;"><div style="display:flex;flex-direction:row;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;width:100%;"><my-text-3871366564787775 _data="_ngElementStrategy.componentRef.instance"
                         _methods="_ngElementStrategy.componentRef.instance" 
                        style="font-size:14px;color:black;"></my-text-3871366564787775><my-input-7939312883131933 _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"
                    type="text" 
               ></my-input-7939312883131933><my-button-08238109815794292 _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"></my-button-08238109815794292></div><div style="padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;width:100%;"><my-table-8491339804857236 _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"></my-table-8491339804857236></div></div><my-api-6313223459387611 _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"></my-api-6313223459387611>`;
        constructor(){
          super();
          this.innerHTML = this.template;
        }
      }
    );
    class MyText3871366564787775 extends TextComponent{
              constructor(){
                  super();
                  this.text = '姓名'
              }
          }
          MyText3871366564787775.ɵcmp.factory = () => { return new MyText3871366564787775()};
          customElements.define('my-text-3871366564787775',createCustomElement(MyText3871366564787775, {  injector: injector,}));
          class MyInput7939312883131933 extends InputComponent{
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
        MyInput7939312883131933.ɵcmp.factory = () => { return new MyInput7939312883131933()};
        customElements.define('my-input-7939312883131933',createCustomElement(MyInput7939312883131933, {  injector: injector,}));
        class MyButton08238109815794292 extends ButtonComponent{
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
           MyButton08238109815794292.ɵcmp.factory = () => { return new MyButton08238109815794292()};
           customElements.define('my-button-08238109815794292',createCustomElement(MyButton08238109815794292, {  injector: injector,}));
           class MyTable8491339804857236 extends TableComponent{
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
         MyTable8491339804857236.ɵcmp.factory = () => { return new MyTable8491339804857236()};
         customElements.define('my-table-8491339804857236',createCustomElement(MyTable8491339804857236, {  injector: injector,}));
         class MyAPI6313223459387611 extends APIComponent{
               constructor(){
                   super();
                   this.method = 'get'
this.api = 'https://www.fastmock.site/mock/14c2723aefa052a75b2a6feeed0cf387/suger/records'
               }
           }
           MyAPI6313223459387611.ɵcmp.factory = () => { return new MyAPI6313223459387611()};
           customElements.define('my-api-6313223459387611',createCustomElement(MyAPI6313223459387611, {  injector: injector,}));
           ;
            (()=>{
                const sourceDOM = document.querySelector('my-button-08238109815794292'),
                    targetDOM = document.querySelector('my-api-6313223459387611'),
                    targetPath = (targetDOM.getAttribute('_methods')||'').split('.');
                let targetIns = targetPath.reduce((pre,key)=>pre[key],targetDOM);
                sourceDOM.addEventListener('click', (e)=>{
                  targetIns['request']();
                });
            })();
              
            (()=>{
              const sourceDOM = document.querySelector('my-api-6313223459387611'),
                    targetDOM = document.querySelector('my-table-8491339804857236'),
                    sourcePath = (sourceDOM.getAttribute('_data')||'').split('.'),
                    targetPath = (targetDOM.getAttribute('_data')||'').split('.');
              let sourceIns = sourcePath.reduce((pre,key)=>pre[key],sourceDOM),
                  targetIns = targetPath.reduce((pre,key)=>pre[key],targetDOM);      
              sourceDOM.addEventListener('success200',()=>{
                targetIns['list'] = sourceIns['data'];
              })
            })();
          
    