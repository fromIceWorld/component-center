
    
    customElements.define('xuefang-base-finish',
      class MyComponent extends HTMLElement{
        template = `<div><div style="margin-bottom:11px;"><div style="display:flex;justify-content:flex-start"}><div style="margin-left:1px;"><my-text-5185339815295962 _data="_ngElementStrategy.componentRef.instance"
                         _methods="_ngElementStrategy.componentRef.instance" 
                        style="font-size:14px;color:black;"></my-text-5185339815295962></div>
<div style="margin-left:5px;"><my-input-027104753832272843 _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"
                    type="text" 
               ></my-input-027104753832272843></div>
<div style="margin-left:17px;"><my-text-7857959621603596 _data="_ngElementStrategy.componentRef.instance"
                         _methods="_ngElementStrategy.componentRef.instance" 
                        style="font-size:14px;color:black;"></my-text-7857959621603596></div>
<div style="margin-left:5px;"><my-input-0916322286591984 _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"
                    type="text" 
               ></my-input-0916322286591984></div>
<div style="margin-left:11px;"><my-text-9206106913944891 _data="_ngElementStrategy.componentRef.instance"
                         _methods="_ngElementStrategy.componentRef.instance" 
                        style="font-size:14px;color:black;"></my-text-9206106913944891></div>
<div style="margin-left:11px;"><my-radio-5951167813072775 _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"></my-radio-5951167813072775></div>
<div style="margin-left:8px;"><my-text-6536758936195128 _data="_ngElementStrategy.componentRef.instance"
                         _methods="_ngElementStrategy.componentRef.instance" 
                        style="font-size:14px;color:black;"></my-text-6536758936195128></div>
<div style="margin-left:7px;"><my-radio-5842688878117712 _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"></my-radio-5842688878117712></div>
<div style="margin-left:9px;"><my-text-3754794983444547 _data="_ngElementStrategy.componentRef.instance"
                         _methods="_ngElementStrategy.componentRef.instance" 
                        style="font-size:14px;color:black;"></my-text-3754794983444547></div>
<div style="margin-left:7px;"><my-date-12608609618222388 _data="_instance.ctx._.data" _methods="_instance.ctx"></my-date-12608609618222388></div>
<div style="margin-left:17px;"><my-button-5078552674288848 _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"></my-button-5078552674288848></div>
</div>
</div>
<div style="margin-bottom:11.5px;margin-top:11px;"><div style="display:flex;justify-content:flex-start"}><div style="margin-left:6px;"><my-button-3359919731849512 _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"></my-button-3359919731849512></div>
<div style="margin-left:18px;"><my-button-9057706836058521 _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"></my-button-9057706836058521></div>
<div style="margin-left:13px;"><my-button-9786546581495075 _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"></my-button-9786546581495075></div>
<div style="margin-left:18px;"><my-button-3783928741320217 _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"></my-button-3783928741320217></div>
</div>
</div>
<div style="margin-bottom:26.5px;margin-top:11.5px;"><div style="display:flex;justify-content:flex-start"}><div style="margin-left:0px;"><my-table-94993655824511 _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"></my-table-94993655824511></div>
</div>
</div>
<div style="margin-top:26.5px;"><div style="display:flex;justify-content:flex-end"}><div style="margin-left:999px;"><my-api-958307075609846 _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"></my-api-958307075609846></div>
</div>
</div>
</div><my-dialog-5298331388615913 _data="_ngElementStrategy.componentRef.instance" 
                         _methods="_ngElementStrategy.componentRef.instance"
                         style="display:flex;'flex-direction:undefined"><div style="margin-bottom:-15.5px;"><div style="display:flex;justify-content:flex-end"}><div style="margin-left:85px;"><my-input-11321955083158941 _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"
                    type="text" 
               ></my-input-11321955083158941></div>
</div>
</div>
<div style="margin-bottom:8px;margin-top:-15.5px;"><div style="display:flex;justify-content:flex-start"}><div style="margin-left:0px;"><my-text-3670155735092633 _data="_ngElementStrategy.componentRef.instance"
                         _methods="_ngElementStrategy.componentRef.instance" 
                        style="font-size:14px;color:black;"></my-text-3670155735092633></div>
</div>
</div>
<div style="margin-top:8px;"><div style="display:flex;justify-content:flex-end"}><div style="margin-left:7px;"><my-text-9412743681899984 _data="_ngElementStrategy.componentRef.instance"
                         _methods="_ngElementStrategy.componentRef.instance" 
                        style="font-size:14px;color:black;"></my-text-9412743681899984></div>
<div style="margin-left:15px;"><my-input-9637810418970281 _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"
                    type="text" 
               ></my-input-9637810418970281></div>
</div>
</div>
</my-dialog-5298331388615913>`;
        constructor(){
          super();
          this.innerHTML = this.template;
        }
      }
    );
    class MyText5185339815295962 extends TextComponent{
              constructor(){
                  super();
                  this.text = '嫌疑人编号'
                  this.dep();
              }
              dep(){
                setTimeout(()=>{
                  this.cd = this['__ngContext__'][13][0]._ngElementStrategy.componentRef.changeDetectorRef;
                });
              }
          }
          MyText5185339815295962.ɵcmp.factory = () => { return new MyText5185339815295962()};
          customElements.define('my-text-5185339815295962',createCustomElement(MyText5185339815295962, {  injector: injector,}));
          class MyInput027104753832272843 extends InputComponent{
            constructor(){
                super();
                this.placeholder="请输入嫌疑人编号"
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
        MyInput027104753832272843.ɵcmp.factory = () => { return new MyInput027104753832272843()};
        customElements.define('my-input-027104753832272843',createCustomElement(MyInput027104753832272843, {  injector: injector,}));
        class MyText7857959621603596 extends TextComponent{
              constructor(){
                  super();
                  this.text = '中文姓名'
                  this.dep();
              }
              dep(){
                setTimeout(()=>{
                  this.cd = this['__ngContext__'][13][0]._ngElementStrategy.componentRef.changeDetectorRef;
                });
              }
          }
          MyText7857959621603596.ɵcmp.factory = () => { return new MyText7857959621603596()};
          customElements.define('my-text-7857959621603596',createCustomElement(MyText7857959621603596, {  injector: injector,}));
          class MyInput0916322286591984 extends InputComponent{
            constructor(){
                super();
                this.placeholder="请输入中文姓名"
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
        MyInput0916322286591984.ɵcmp.factory = () => { return new MyInput0916322286591984()};
        customElements.define('my-input-0916322286591984',createCustomElement(MyInput0916322286591984, {  injector: injector,}));
        class MyText9206106913944891 extends TextComponent{
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
          MyText9206106913944891.ɵcmp.factory = () => { return new MyText9206106913944891()};
          customElements.define('my-text-9206106913944891',createCustomElement(MyText9206106913944891, {  injector: injector,}));
          class MyRadio5951167813072775 extends RadioComponent{
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
        MyRadio5951167813072775.ɵcmp.factory = () => { return new MyRadio5951167813072775()};
        customElements.define('my-radio-5951167813072775',createCustomElement(MyRadio5951167813072775, {  injector: injector}));
        class MyText6536758936195128 extends TextComponent{
              constructor(){
                  super();
                  this.text = '重点'
                  this.dep();
              }
              dep(){
                setTimeout(()=>{
                  this.cd = this['__ngContext__'][13][0]._ngElementStrategy.componentRef.changeDetectorRef;
                });
              }
          }
          MyText6536758936195128.ɵcmp.factory = () => { return new MyText6536758936195128()};
          customElements.define('my-text-6536758936195128',createCustomElement(MyText6536758936195128, {  injector: injector,}));
          class MyRadio5842688878117712 extends RadioComponent{
            constructor(){
                super();
                this.options = [{"label":"是","value":"是","checked":true},{"label":"否","value":"否","checked":false}];
                this.control = '是';
            }
            get value() {
              return {sex:this.control};
            }
            set value(target) {
              this.control = target;
            }
        }
        MyRadio5842688878117712.ɵcmp.factory = () => { return new MyRadio5842688878117712()};
        customElements.define('my-radio-5842688878117712',createCustomElement(MyRadio5842688878117712, {  injector: injector}));
        class MyText3754794983444547 extends TextComponent{
              constructor(){
                  super();
                  this.text = '创建时间'
                  this.dep();
              }
              dep(){
                setTimeout(()=>{
                  this.cd = this['__ngContext__'][13][0]._ngElementStrategy.componentRef.changeDetectorRef;
                });
              }
          }
          MyText3754794983444547.ɵcmp.factory = () => { return new MyText3754794983444547()};
          customElements.define('my-text-3754794983444547',createCustomElement(MyText3754794983444547, {  injector: injector,}));
          class MyDatePicker12608609618222388 extends MyDatePickerComponent{
              constructor(){
                super();
                let vm = document.querySelector('my-date-12608609618222388');
                setTimeout(()=>{
                  let params = {"date":""};
                  console.log(params)
                  Object.keys(params).map(key=>{
                    vm._instance.ctx._.data[key] = params[key]
                  })
                });
              }
              get date(){
                let vm = document.querySelector('my-date-12608609618222388');
                return {
                  start:(vm._instance.ctx._.data.date || [])[0],
                  end:(vm._instance.ctx._.data.date || [])[1]
                }
              }
            }
            customElements.define('my-date-12608609618222388',MyDatePicker12608609618222388);
            class MyButton5078552674288848 extends ButtonComponent{
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
this.name = '搜索'
                   this.dep();
                }
                dep(){
                  setTimeout(()=>{
                    this.cd = this['__ngContext__'][13][0]._ngElementStrategy.componentRef.changeDetectorRef;
                  });
                }
           }
           MyButton5078552674288848.ɵcmp.factory = () => { return new MyButton5078552674288848()};
           customElements.define('my-button-5078552674288848',createCustomElement(MyButton5078552674288848, {  injector: injector,}));
           class MyButton3359919731849512 extends ButtonComponent{
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
this.icon = 'plus'
this.name = ''
                   this.dep();
                }
                dep(){
                  setTimeout(()=>{
                    this.cd = this['__ngContext__'][13][0]._ngElementStrategy.componentRef.changeDetectorRef;
                  });
                }
           }
           MyButton3359919731849512.ɵcmp.factory = () => { return new MyButton3359919731849512()};
           customElements.define('my-button-3359919731849512',createCustomElement(MyButton3359919731849512, {  injector: injector,}));
           class MyButton9057706836058521 extends ButtonComponent{
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
this.icon = 'download'
this.name = '模板下载'
                   this.dep();
                }
                dep(){
                  setTimeout(()=>{
                    this.cd = this['__ngContext__'][13][0]._ngElementStrategy.componentRef.changeDetectorRef;
                  });
                }
           }
           MyButton9057706836058521.ɵcmp.factory = () => { return new MyButton9057706836058521()};
           customElements.define('my-button-9057706836058521',createCustomElement(MyButton9057706836058521, {  injector: injector,}));
           class MyButton9786546581495075 extends ButtonComponent{
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
this.icon = 'export'
this.name = '导出'
                   this.dep();
                }
                dep(){
                  setTimeout(()=>{
                    this.cd = this['__ngContext__'][13][0]._ngElementStrategy.componentRef.changeDetectorRef;
                  });
                }
           }
           MyButton9786546581495075.ɵcmp.factory = () => { return new MyButton9786546581495075()};
           customElements.define('my-button-9786546581495075',createCustomElement(MyButton9786546581495075, {  injector: injector,}));
           class MyButton3783928741320217 extends ButtonComponent{
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
this.icon = 'delete'
this.name = '批量删除'
                   this.dep();
                }
                dep(){
                  setTimeout(()=>{
                    this.cd = this['__ngContext__'][13][0]._ngElementStrategy.componentRef.changeDetectorRef;
                  });
                }
           }
           MyButton3783928741320217.ɵcmp.factory = () => { return new MyButton3783928741320217()};
           customElements.define('my-button-3783928741320217',createCustomElement(MyButton3783928741320217, {  injector: injector,}));
           class MyTable94993655824511 extends TableComponent{
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
this.headers = [{"label":"嫌疑人编号","key":"name","width":"100"},{"label":"中文姓名","key":"age","width":"100"},{"label":"性别","key":"address","width":"100"},{"label":"身份证号码","key":"key","width":"100"},{"label":"是否重点","key":"key","width":"100"},{"label":"创建时间","key":"key","width":"100"},{"label":"地址","key":"key","width":"auto"}]
this.row = 10
this.listOfData = [{"name":"ts","age":13,"address":"海淀区","id":1,"description":"展开后的详情"}]
this.viewBtn = true
this.editBtn = true
this.deleteBtn = true;
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
         MyTable94993655824511.ɵcmp.factory = () => { return new MyTable94993655824511()};
         customElements.define('my-table-94993655824511',createCustomElement(MyTable94993655824511, {  injector: injector,}));
         class MyAPI958307075609846 extends RequestComponent{
               constructor(){
                   super(RequestComponent.httpCopy);
                   this.method = 'get'
this.api = 'https://www.fastmock.site/mock/14c2723aefa052a75b2a6feeed0cf387/suger/records'
               }
           }
           MyAPI958307075609846.ɵcmp.factory = () => { return new MyAPI958307075609846()};
           customElements.define('my-api-958307075609846',createCustomElement(MyAPI958307075609846, {  injector: injector,}));
           class MyDialogModel5298331388615913 extends DialogComponent{
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
           MyDialogModel5298331388615913.ɵcmp.factory = () => { return new MyDialogModel5298331388615913()};
           customElements.define('my-dialog-5298331388615913',createCustomElement(MyDialogModel5298331388615913,{injector}));
                 class MyInput11321955083158941 extends InputComponent{
            constructor(){
                super();
                this.placeholder="请输入嫌疑人编号"
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
        MyInput11321955083158941.ɵcmp.factory = () => { return new MyInput11321955083158941()};
        customElements.define('my-input-11321955083158941',createCustomElement(MyInput11321955083158941, {  injector: injector,}));
        class MyText3670155735092633 extends TextComponent{
              constructor(){
                  super();
                  this.text = '嫌疑人编号'
                  this.dep();
              }
              dep(){
                setTimeout(()=>{
                  this.cd = this['__ngContext__'][13][0]._ngElementStrategy.componentRef.changeDetectorRef;
                });
              }
          }
          MyText3670155735092633.ɵcmp.factory = () => { return new MyText3670155735092633()};
          customElements.define('my-text-3670155735092633',createCustomElement(MyText3670155735092633, {  injector: injector,}));
          class MyText9412743681899984 extends TextComponent{
              constructor(){
                  super();
                  this.text = '中文姓名'
                  this.dep();
              }
              dep(){
                setTimeout(()=>{
                  this.cd = this['__ngContext__'][13][0]._ngElementStrategy.componentRef.changeDetectorRef;
                });
              }
          }
          MyText9412743681899984.ɵcmp.factory = () => { return new MyText9412743681899984()};
          customElements.define('my-text-9412743681899984',createCustomElement(MyText9412743681899984, {  injector: injector,}));
          class MyInput9637810418970281 extends InputComponent{
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
        MyInput9637810418970281.ɵcmp.factory = () => { return new MyInput9637810418970281()};
        customElements.define('my-input-9637810418970281',createCustomElement(MyInput9637810418970281, {  injector: injector,}));
        ;
            (()=>{
                const sourceDOM = document.querySelector('my-button-5078552674288848'),
                    targetDOM = document.querySelector('my-api-958307075609846'),
                    targetPath = (targetDOM.getAttribute('_methods')||'').split('.');
                sourceDOM.addEventListener('click', (e)=>{
                  let targetIns = targetPath.length ? targetPath.reduce((pre,key)=>key ? pre[key] : pre,targetDOM) : targetDOM;
                  targetIns['request']();
                });
            })();
              
            (()=>{
              const sourceDOM = document.querySelector('my-api-958307075609846'),
                    targetDOM = document.querySelector('my-table-94993655824511'),
                    sourcePath = (sourceDOM.getAttribute('_data')||'').split('.'),
                    targetPath = (targetDOM.getAttribute('_data')||'').split('.');
              sourceDOM.addEventListener('success200',()=>{
                let sourceIns = sourcePath.length ? sourcePath.reduce((pre,key)=>key ? pre[key] : pre,sourceDOM) : sourceDOM,
                    targetIns = targetPath.length ? targetPath.reduce((pre,key)=>key ? pre[key] : pre,targetDOM) : targetDOM;
                targetIns.list = sourceIns.list;
              })
            })();
          
            (()=>{
              const sourceDOM = document.querySelector('my-table-94993655824511'),
                    targetDOM = document.querySelector('my-input-11321955083158941'),
                    sourcePath = (sourceDOM.getAttribute('_data')||'').split('.'),
                    targetPath = (targetDOM.getAttribute('_data')||'').split('.');
              sourceDOM.addEventListener('edit',()=>{
                let sourceIns = sourcePath.length ? sourcePath.reduce((pre,key)=>key ? pre[key] : pre,sourceDOM) : sourceDOM,
                    targetIns = targetPath.length ? targetPath.reduce((pre,key)=>key ? pre[key] : pre,targetDOM) : targetDOM;
                targetIns.value = sourceIns.item.name;
              })
            })();
          
            (()=>{
              const sourceDOM = document.querySelector('my-table-94993655824511'),
                    targetDOM = document.querySelector('my-input-9637810418970281'),
                    sourcePath = (sourceDOM.getAttribute('_data')||'').split('.'),
                    targetPath = (targetDOM.getAttribute('_data')||'').split('.');
              sourceDOM.addEventListener('edit',()=>{
                let sourceIns = sourcePath.length ? sourcePath.reduce((pre,key)=>key ? pre[key] : pre,sourceDOM) : sourceDOM,
                    targetIns = targetPath.length ? targetPath.reduce((pre,key)=>key ? pre[key] : pre,targetDOM) : targetDOM;
                targetIns.value = sourceIns.item.name;
              })
            })();
          
            (()=>{
                const sourceDOM = document.querySelector('my-table-94993655824511'),
                    targetDOM = document.querySelector('my-dialog-5298331388615913'),
                    targetPath = (targetDOM.getAttribute('_methods')||'').split('.');
                sourceDOM.addEventListener('edit', (e)=>{
                  let targetIns = targetPath.length ? targetPath.reduce((pre,key)=>key ? pre[key] : pre,targetDOM) : targetDOM;
                  targetIns['visibleChange']();
                });
            })();
              
    