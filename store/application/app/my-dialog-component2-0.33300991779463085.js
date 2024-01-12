
    
    customElements.define('my-dialog-component2',
      class MyComponent extends HTMLElement{
        template = `<div><div><div style="display:flex;justify-content:flex-start"}><div style="margin-left:0px;"><my-table-7087900719190388 _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"></my-table-7087900719190388></div>
</div>
</div>
</div><my-dialog-8770866077059274 _data="_ngElementStrategy.componentRef.instance" 
                         _methods="_ngElementStrategy.componentRef.instance"
                         style="display:flex;'flex-direction:undefined"><div><div style="display:flex;justify-content:flex-start"}><div style="margin-left:0px;"><my-input-11274841853950335 _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"
                    type="text" 
               ></my-input-11274841853950335></div>
</div>
</div>
</my-dialog-8770866077059274>`;
        constructor(){
          super();
          this.innerHTML = this.template;
        }
      }
    );
    class MyTable7087900719190388 extends TableComponent{
             constructor(){
                 super();
                 this.title = false
this.titleValue = 'Here is Title'
this.header = true
this.footer = false
this.footerValue = 'Here is Footer'
this.expandable = false
this.checkbox = false
this.ellipsis = false
this.size = 'middle'
this.headers = [{"label":"名称","key":"name","width":"100"},{"label":"年龄","key":"age","width":"100"},{"label":"地址","key":"address","width":"100"}]
this.row = 10
this.listOfData = [{"name":"ts","age":13,"address":"海淀区","id":1,"description":"展开后的详情"}]
this.viewBtn = false
this.editBtn = true
this.deleteBtn = false;
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
             get selected() {
              return {selected:Array.from(this.setOfCheckedId)};
             }
             get id() {
              return {id:this.item && this.item.id};
             }
         }
         MyTable7087900719190388.ɵcmp.factory = () => { return new MyTable7087900719190388()};
         customElements.define('my-table-7087900719190388',createCustomElement(MyTable7087900719190388, {  injector: injector,}));
         class MyDialogModel8770866077059274 extends DialogComponent{
             constructor(){
                super();
                this.title = '对话框';
                this.dep();
             }
             dep(){
              setTimeout(()=>{
                this.cd = this['__ngContext__'][13][0]._ngElementStrategy.componentRef.changeDetectorRef;
              });
            }
           }
           MyDialogModel8770866077059274.ɵcmp.factory = () => { return new MyDialogModel8770866077059274()};
           customElements.define('my-dialog-8770866077059274',createCustomElement(MyDialogModel8770866077059274,{injector}));
                 class MyInput11274841853950335 extends InputComponent{
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
        MyInput11274841853950335.ɵcmp.factory = () => { return new MyInput11274841853950335()};
        customElements.define('my-input-11274841853950335',createCustomElement(MyInput11274841853950335, {  injector: injector,}));
        ;
            (()=>{
                const sourceDOM = document.querySelector('my-table-7087900719190388'),
                    targetDOM = document.querySelector('my-dialog-8770866077059274'),
                    targetPath = (targetDOM.getAttribute('_methods')||'').split('.');
                sourceDOM.addEventListener('edit', (e)=>{
                  let targetIns = targetPath.length ? targetPath.reduce((pre,key)=>key ? pre[key] : pre,targetDOM) : targetDOM;
                  targetIns['visibleChange']();
                });
            })();
              
            (()=>{
              const sourceDOM = document.querySelector('my-table-7087900719190388'),
                    targetDOM = document.querySelector('my-input-11274841853950335'),
                    sourcePath = (sourceDOM.getAttribute('_data')||'').split('.'),
                    targetPath = (targetDOM.getAttribute('_data')||'').split('.');
              sourceDOM.addEventListener('edit',()=>{
                let sourceIns = sourcePath.length ? sourcePath.reduce((pre,key)=>key ? pre[key] : pre,sourceDOM) : sourceDOM,
                    targetIns = targetPath.length ? targetPath.reduce((pre,key)=>key ? pre[key] : pre,targetDOM) : targetDOM;
                targetIns.value = sourceIns.item.name;
              })
            })();
          
    