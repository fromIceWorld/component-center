
    
    customElements.define('my-base-time',
      class MyComponent extends HTMLElement{
        template = `<div style="display:flex;flex-direction:column;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;width:100%;"><div style="display:flex;flex-direction:row;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;width:100%;"><my-text-36150178827950485 _data="_ngElementStrategy.componentRef.instance"
                         _methods="_ngElementStrategy.componentRef.instance" 
                        style="font-size:14px;color:black;"></my-text-36150178827950485><my-input-396438291355951 _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"
                    type="text" 
               ></my-input-396438291355951><my-text-45828059904743546 _data="_ngElementStrategy.componentRef.instance"
                         _methods="_ngElementStrategy.componentRef.instance" 
                        style="font-size:14px;color:black;"></my-text-45828059904743546><my-radio-8498741135632304 _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"></my-radio-8498741135632304><my-text-4101829257584826 _data="_ngElementStrategy.componentRef.instance"
                         _methods="_ngElementStrategy.componentRef.instance" 
                        style="font-size:14px;color:black;"></my-text-4101829257584826><my-select-7146492034153074 _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"></my-select-7146492034153074><my-text-7815133444452333 _data="_ngElementStrategy.componentRef.instance"
                         _methods="_ngElementStrategy.componentRef.instance" 
                        style="font-size:14px;color:black;"></my-text-7815133444452333><my-date-9469967542906692 _data="_instance.ctx._.data" _methods="_instance.ctx"></my-date-9469967542906692><my-button-53434284902607 _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"></my-button-53434284902607></div><div style="padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;width:100%;"><my-table-0526934254279654 _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"></my-table-0526934254279654></div></div><my-api-33086533893917913 _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"></my-api-33086533893917913>`;
        constructor(){
          super();
          this.innerHTML = this.template;
        }
      }
    );
    class MyText36150178827950485 extends TextComponent{
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
          MyText36150178827950485.ɵcmp.factory = () => { return new MyText36150178827950485()};
          customElements.define('my-text-36150178827950485',createCustomElement(MyText36150178827950485, {  injector: injector,}));
          class MyInput396438291355951 extends InputComponent{
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
        MyInput396438291355951.ɵcmp.factory = () => { return new MyInput396438291355951()};
        customElements.define('my-input-396438291355951',createCustomElement(MyInput396438291355951, {  injector: injector,}));
        class MyText45828059904743546 extends TextComponent{
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
          MyText45828059904743546.ɵcmp.factory = () => { return new MyText45828059904743546()};
          customElements.define('my-text-45828059904743546',createCustomElement(MyText45828059904743546, {  injector: injector,}));
          class MyRadio8498741135632304 extends RadioComponent{
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
        MyRadio8498741135632304.ɵcmp.factory = () => { return new MyRadio8498741135632304()};
        customElements.define('my-radio-8498741135632304',createCustomElement(MyRadio8498741135632304, {  injector: injector}));
        class MyText4101829257584826 extends TextComponent{
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
          MyText4101829257584826.ɵcmp.factory = () => { return new MyText4101829257584826()};
          customElements.define('my-text-4101829257584826',createCustomElement(MyText4101829257584826, {  injector: injector,}));
          class MySelect7146492034153074 extends SelectComponent{
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
        MySelect7146492034153074.ɵcmp.factory = () => { return new MySelect7146492034153074()};
        customElements.define('my-select-7146492034153074',createCustomElement(MySelect7146492034153074, {  injector: injector}));
        class MyText7815133444452333 extends TextComponent{
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
          MyText7815133444452333.ɵcmp.factory = () => { return new MyText7815133444452333()};
          customElements.define('my-text-7815133444452333',createCustomElement(MyText7815133444452333, {  injector: injector,}));
          class MyDatePicker9469967542906692 extends MyDatePickerComponent{
              constructor(){
                super();
                let vm = document.querySelector('my-date-9469967542906692');
                setTimeout(()=>{
                  let params = {"date":""};
                  console.log(params)
                  Object.keys(params).map(key=>{
                    vm._instance.ctx._.data[key] = params[key]
                  })
                });
              }
              get date(){
                let vm = document.querySelector('my-date-9469967542906692');
                return {
                  start:(vm._instance.ctx._.data.date || [])[0],
                  end:(vm._instance.ctx._.data.date || [])[1]
                }
              }
            }
            customElements.define('my-date-9469967542906692',MyDatePicker9469967542906692);
            class MyButton53434284902607 extends ButtonComponent{
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
           MyButton53434284902607.ɵcmp.factory = () => { return new MyButton53434284902607()};
           customElements.define('my-button-53434284902607',createCustomElement(MyButton53434284902607, {  injector: injector,}));
           class MyTable0526934254279654 extends TableComponent{
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
         MyTable0526934254279654.ɵcmp.factory = () => { return new MyTable0526934254279654()};
         customElements.define('my-table-0526934254279654',createCustomElement(MyTable0526934254279654, {  injector: injector,}));
         class MyAPI33086533893917913 extends RequestComponent{
               constructor(){
                   super(RequestComponent.httpCopy);
                   this.method = 'get'
this.api = 'https://www.fastmock.site/mock/14c2723aefa052a75b2a6feeed0cf387/suger/records'
               }
           }
           MyAPI33086533893917913.ɵcmp.factory = () => { return new MyAPI33086533893917913()};
           customElements.define('my-api-33086533893917913',createCustomElement(MyAPI33086533893917913, {  injector: injector,}));
           ;
            (()=>{
                const sourceDOM = document.querySelector('my-button-53434284902607'),
                    targetDOM = document.querySelector('my-api-33086533893917913'),
                    targetPath = (targetDOM.getAttribute('_methods')||'').split('.');
                sourceDOM.addEventListener('click', (e)=>{
                  let targetIns = targetPath.length ? targetPath.reduce((pre,key)=>key ? pre[key] : pre,targetDOM) : targetDOM;
                  targetIns['request']();
                });
            })();
              
          (()=>{
            const sourceDOM = document.querySelector('my-input-396438291355951'),
                  targetDOM = document.querySelector('my-api-33086533893917913'),
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
            const sourceDOM = document.querySelector('my-radio-8498741135632304'),
                  targetDOM = document.querySelector('my-api-33086533893917913'),
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
            const sourceDOM = document.querySelector('my-select-7146492034153074'),
                  targetDOM = document.querySelector('my-api-33086533893917913'),
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
            const sourceDOM = document.querySelector('my-date-9469967542906692'),
                  targetDOM = document.querySelector('my-api-33086533893917913'),
                  sourcePath = (sourceDOM.getAttribute('_data')||'').split('.'),
                  targetPath = (targetDOM.getAttribute('_methods')||'').split('.');
            let sourceIns = sourcePath.length ? sourcePath.reduce((pre,key)=>key ? pre[key] : pre,sourceDOM) : sourceDOM,
                targetIns = targetPath.length ? targetPath.reduce((pre,key)=>key ? pre[key] : pre,targetDOM) : targetDOM;   
            if(!targetIns['request'].params){
              targetIns['request'].params = []
            }
            targetIns['request'].params.push([sourceIns,["time"]]);
          })();  
          
            (()=>{
              const sourceDOM = document.querySelector('my-api-33086533893917913'),
                    targetDOM = document.querySelector('my-table-0526934254279654'),
                    sourcePath = (sourceDOM.getAttribute('_data')||'').split('.'),
                    targetPath = (targetDOM.getAttribute('_data')||'').split('.');
              sourceDOM.addEventListener('success200',()=>{
                let sourceIns = sourcePath.length ? sourcePath.reduce((pre,key)=>key ? pre[key] : pre,sourceDOM) : sourceDOM,
                    targetIns = targetPath.length ? targetPath.reduce((pre,key)=>key ? pre[key] : pre,targetDOM) : targetDOM;
                targetIns['list'] = sourceIns['list'];
              })
            })();
          
    