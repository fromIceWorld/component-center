
    
    customElements.define('my-search',
      class MyComponent extends HTMLElement{
        template = `<div style="display:flex;flex-direction:column;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;width:100%;"><div style="display:flex;flex-direction:row;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;width:100%;"><my-text-8577718886757233 _data="_ngElementStrategy.componentRef.instance"
                         _methods="_ngElementStrategy.componentRef.instance" 
                        style="font-size:14px;color:black;"></my-text-8577718886757233><my-input-6997030571453178 _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"
                    type="text" 
               ></my-input-6997030571453178><my-text-6780416691278428 _data="_ngElementStrategy.componentRef.instance"
                         _methods="_ngElementStrategy.componentRef.instance" 
                        style="font-size:14px;color:black;"></my-text-6780416691278428><my-radio-20566525039234218 _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"></my-radio-20566525039234218><my-button-3476291605260029 _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"></my-button-3476291605260029></div><div style="padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;width:100%;"><my-table-7042361217556652 _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"></my-table-7042361217556652></div></div><my-api-3955614559541891 _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"></my-api-3955614559541891>`;
        constructor(){
          super();
          this.innerHTML = this.template;
        }
      }
    );
    class MyText8577718886757233 extends TextComponent{
              constructor(){
                  super();
                  this.text = '姓名'
              }
          }
          MyText8577718886757233.ɵcmp.factory = () => { return new MyText8577718886757233()};
          customElements.define('my-text-8577718886757233',createCustomElement(MyText8577718886757233, {  injector: injector,}));
          class MyInput6997030571453178 extends InputComponent{
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
        MyInput6997030571453178.ɵcmp.factory = () => { return new MyInput6997030571453178()};
        customElements.define('my-input-6997030571453178',createCustomElement(MyInput6997030571453178, {  injector: injector,}));
        class MyText6780416691278428 extends TextComponent{
              constructor(){
                  super();
                  this.text = '姓名'
              }
          }
          MyText6780416691278428.ɵcmp.factory = () => { return new MyText6780416691278428()};
          customElements.define('my-text-6780416691278428',createCustomElement(MyText6780416691278428, {  injector: injector,}));
          class MyRadio20566525039234218 extends RadioComponent{
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
        MyRadio20566525039234218.ɵcmp.factory = () => { return new MyRadio20566525039234218()};
        customElements.define('my-radio-20566525039234218',createCustomElement(MyRadio20566525039234218, {  injector: injector}));
        class MyButton3476291605260029 extends ButtonComponent{
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
           MyButton3476291605260029.ɵcmp.factory = () => { return new MyButton3476291605260029()};
           customElements.define('my-button-3476291605260029',createCustomElement(MyButton3476291605260029, {  injector: injector,}));
           class MyTable7042361217556652 extends TableComponent{
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
         MyTable7042361217556652.ɵcmp.factory = () => { return new MyTable7042361217556652()};
         customElements.define('my-table-7042361217556652',createCustomElement(MyTable7042361217556652, {  injector: injector,}));
         class MyAPI3955614559541891 extends APIComponent{
               constructor(){
                   super();
                   this.method = 'get'
this.api = 'https://www.fastmock.site/mock/14c2723aefa052a75b2a6feeed0cf387/suger/records'
               }
           }
           MyAPI3955614559541891.ɵcmp.factory = () => { return new MyAPI3955614559541891()};
           customElements.define('my-api-3955614559541891',createCustomElement(MyAPI3955614559541891, {  injector: injector,}));
           ;
            (()=>{
                const sourceDOM = document.querySelector('my-button-3476291605260029'),
                    targetDOM = document.querySelector('my-api-3955614559541891'),
                    targetPath = (targetDOM.getAttribute('_methods')||'').split('.');
                sourceDOM.addEventListener('click', (e)=>{
                  let targetIns = targetPath.length ? targetPath.reduce((pre,key)=>key ? pre[key] : pre,targetDOM) : targetDOM;
                  targetIns['request']();
                });
            })();
              
            (()=>{
              const sourceDOM = document.querySelector('my-api-3955614559541891'),
                    targetDOM = document.querySelector('my-table-7042361217556652'),
                    sourcePath = (sourceDOM.getAttribute('_data')||'').split('.'),
                    targetPath = (targetDOM.getAttribute('_data')||'').split('.');
              sourceDOM.addEventListener('success200',()=>{
                let sourceIns = sourcePath.length ? sourcePath.reduce((pre,key)=>key ? pre[key] : pre,sourceDOM) : sourceDOM,
                    targetIns = targetPath.length ? targetPath.reduce((pre,key)=>key ? pre[key] : pre,targetDOM) : targetDOM;
                targetIns['list'] = sourceIns['list'];
              })
            })();
          
          (()=>{
            const sourceDOM = document.querySelector('my-input-6997030571453178'),
                  targetDOM = document.querySelector('my-api-3955614559541891'),
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
            const sourceDOM = document.querySelector('my-radio-20566525039234218'),
                  targetDOM = document.querySelector('my-api-3955614559541891'),
                  sourcePath = (sourceDOM.getAttribute('_data')||'').split('.'),
                  targetPath = (targetDOM.getAttribute('_methods')||'').split('.');
            let sourceIns = sourcePath.length ? sourcePath.reduce((pre,key)=>key ? pre[key] : pre,sourceDOM) : sourceDOM,
                targetIns = targetPath.length ? targetPath.reduce((pre,key)=>key ? pre[key] : pre,targetDOM) : targetDOM;   
            if(!targetIns['request'].params){
              targetIns['request'].params = []
            }
            targetIns['request'].params.push([sourceIns,["value"]]);
          })();  
          
    