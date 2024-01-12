
    
    customElements.define('my-base-2',
      class MyComponent extends HTMLElement{
        template = `<div style="display:flex;flex-direction:column;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;width:100%;"><div style="display:flex;flex-direction:row;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;width:100%;"><my-text-20947119300409356 _data="_ngElementStrategy.componentRef.instance"
                         _methods="_ngElementStrategy.componentRef.instance" 
                        style="font-size:14px;color:black;"></my-text-20947119300409356><my-input-8649662060154963 _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"
                    type="text" 
               ></my-input-8649662060154963><my-text-6258572678958774 _data="_ngElementStrategy.componentRef.instance"
                         _methods="_ngElementStrategy.componentRef.instance" 
                        style="font-size:14px;color:black;"></my-text-6258572678958774><my-radio-8401556807840336 _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"></my-radio-8401556807840336><my-button-9715985728376741 _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"></my-button-9715985728376741></div><div style="padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;width:100%;"><my-table-19508468106529198 _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"></my-table-19508468106529198></div></div><my-api-5829224023337776 _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"></my-api-5829224023337776>`;
        constructor(){
          super();
          this.innerHTML = this.template;
        }
      }
    );
    class MyText20947119300409356 extends TextComponent{
              constructor(){
                  super();
                  this.text = '姓名'
              }
          }
          MyText20947119300409356.ɵcmp.factory = () => { return new MyText20947119300409356()};
          customElements.define('my-text-20947119300409356',createCustomElement(MyText20947119300409356, {  injector: injector,}));
          class MyInput8649662060154963 extends InputComponent{
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
        MyInput8649662060154963.ɵcmp.factory = () => { return new MyInput8649662060154963()};
        customElements.define('my-input-8649662060154963',createCustomElement(MyInput8649662060154963, {  injector: injector,}));
        class MyText6258572678958774 extends TextComponent{
              constructor(){
                  super();
                  this.text = '性别'
              }
          }
          MyText6258572678958774.ɵcmp.factory = () => { return new MyText6258572678958774()};
          customElements.define('my-text-6258572678958774',createCustomElement(MyText6258572678958774, {  injector: injector,}));
          class MyRadio8401556807840336 extends RadioComponent{
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
        MyRadio8401556807840336.ɵcmp.factory = () => { return new MyRadio8401556807840336()};
        customElements.define('my-radio-8401556807840336',createCustomElement(MyRadio8401556807840336, {  injector: injector}));
        class MyButton9715985728376741 extends ButtonComponent{
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
           MyButton9715985728376741.ɵcmp.factory = () => { return new MyButton9715985728376741()};
           customElements.define('my-button-9715985728376741',createCustomElement(MyButton9715985728376741, {  injector: injector,}));
           class MyTable19508468106529198 extends TableComponent{
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
         MyTable19508468106529198.ɵcmp.factory = () => { return new MyTable19508468106529198()};
         customElements.define('my-table-19508468106529198',createCustomElement(MyTable19508468106529198, {  injector: injector,}));
         class MyAPI5829224023337776 extends APIComponent{
               constructor(){
                   super();
                   this.method = 'get'
this.api = 'https://www.fastmock.site/mock/14c2723aefa052a75b2a6feeed0cf387/suger/records'
               }
           }
           MyAPI5829224023337776.ɵcmp.factory = () => { return new MyAPI5829224023337776()};
           customElements.define('my-api-5829224023337776',createCustomElement(MyAPI5829224023337776, {  injector: injector,}));
           ;
            (()=>{
                const sourceDOM = document.querySelector('my-button-9715985728376741'),
                    targetDOM = document.querySelector('my-api-5829224023337776'),
                    targetPath = (targetDOM.getAttribute('_methods')||'').split('.');
                let targetIns = targetPath.reduce((pre,key)=>pre[key],targetDOM);
                sourceDOM.addEventListener('click', (e)=>{
                  targetIns['request']();
                });
            })();
              
            (()=>{
              const sourceDOM = document.querySelector('my-api-5829224023337776'),
                    targetDOM = document.querySelector('my-table-19508468106529198'),
                    sourcePath = (sourceDOM.getAttribute('_data')||'').split('.'),
                    targetPath = (targetDOM.getAttribute('_data')||'').split('.');
              let sourceIns = sourcePath.reduce((pre,key)=>pre[key],sourceDOM),
                  targetIns = targetPath.reduce((pre,key)=>pre[key],targetDOM);      
              sourceDOM.addEventListener('success200',()=>{
                targetIns['list'] = sourceIns['data'];
              })
            })();
          
    