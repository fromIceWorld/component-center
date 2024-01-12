
    
    customElements.define('my-test-1',
      class MyComponent extends HTMLElement{
        template = `<div style="padding: 4px;"><div style="margin-bottom:7px;"><div style="padding: 4px;display:flex;flex-wrap:wrap;justify-content:flex-start"><div style="margin-left:-3px;"><my-text-282622780547952 _data="_ngElementStrategy.componentRef.instance"
                         _methods="_ngElementStrategy.componentRef.instance" 
                        style="font-size:14px;color:black;"></my-text-282622780547952></div>
<div style="margin-left:1px;"><my-input-06734881442177243 _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"
                    type="text" 
               ></my-input-06734881442177243></div>
<div style="margin-left:13px;"><my-text-20649044854610987 _data="_ngElementStrategy.componentRef.instance"
                         _methods="_ngElementStrategy.componentRef.instance" 
                        style="font-size:14px;color:black;"></my-text-20649044854610987></div>
<div style="margin-left:1px;"><my-input-2597028499489755 _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"
                    type="text" 
               ></my-input-2597028499489755></div>
<div style="margin-left:7px;"><my-text-9159558549786369 _data="_ngElementStrategy.componentRef.instance"
                         _methods="_ngElementStrategy.componentRef.instance" 
                        style="font-size:14px;color:black;"></my-text-9159558549786369></div>
<div style="margin-left:7px;"><my-radio-421793671319451 _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"></my-radio-421793671319451></div>
<div style="margin-left:4px;"><my-text-8780246233814539 _data="_ngElementStrategy.componentRef.instance"
                         _methods="_ngElementStrategy.componentRef.instance" 
                        style="font-size:14px;color:black;"></my-text-8780246233814539></div>
<div style="margin-left:3px;"><my-radio-3909592550065868 _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"></my-radio-3909592550065868></div>
<div style="margin-left:5px;"><my-text-0005081319010313834 _data="_ngElementStrategy.componentRef.instance"
                         _methods="_ngElementStrategy.componentRef.instance" 
                        style="font-size:14px;color:black;"></my-text-0005081319010313834></div>
<div style="margin-left:3px;"><my-date-7516271641329375 _data="_instance.ctx._.data" _methods="_instance.ctx"></my-date-7516271641329375></div>
<div style="margin-left:13px;"><my-button-743437110494445 _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"></my-button-743437110494445></div>
</div>
</div>
<div style="margin-bottom:7.5px;margin-top:7px;"><div style="padding: 4px;display:flex;flex-wrap:wrap;justify-content:flex-start"><div style="margin-left:2px;"><my-button-18855217774316269 _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"></my-button-18855217774316269></div>
<div style="margin-left:14px;"><my-button-8896173749392469 _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"></my-button-8896173749392469></div>
<div style="margin-left:9px;"><my-button-8225874907447199 _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"></my-button-8225874907447199></div>
<div style="margin-left:14px;"><my-button-7239280382558448 _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"></my-button-7239280382558448></div>
</div>
</div>
<div style="margin-bottom:22.5px;margin-top:7.5px;"><div style="padding: 4px;display:flex;flex-wrap:wrap;justify-content:flex-start"><div style="margin-left:-4px;"><my-table-03539972137059588 _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"></my-table-03539972137059588></div>
</div>
</div>
<div style="margin-top:22.5px;"><div style="padding: 4px;display:flex;flex-wrap:wrap;justify-content:flex-end"><div style="margin-left:995px;"><my-api-5731483860384949 _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"></my-api-5731483860384949></div>
</div>
</div>
</div><my-dialog-6717820392505807 _data="_ngElementStrategy.componentRef.instance" 
                         _methods="_ngElementStrategy.componentRef.instance"
                         style="display:flex;'flex-direction:undefined"><div style="margin-bottom:-19.5px;"><div style="padding: 4px;display:flex;flex-wrap:wrap;justify-content:flex-end"><div style="margin-left:81px;"><my-input-30853443952982396 _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"
                    type="text" 
               ></my-input-30853443952982396></div>
</div>
</div>
<div style="margin-bottom:4px;margin-top:-19.5px;"><div style="padding: 4px;display:flex;flex-wrap:wrap;justify-content:flex-start"><div style="margin-left:-4px;"><my-text-3442113088017136 _data="_ngElementStrategy.componentRef.instance"
                         _methods="_ngElementStrategy.componentRef.instance" 
                        style="font-size:14px;color:black;"></my-text-3442113088017136></div>
</div>
</div>
<div style="margin-top:4px;"><div style="padding: 4px;display:flex;flex-wrap:wrap;justify-content:flex-end"><div style="margin-left:3px;"><my-text-005967627929215125 _data="_ngElementStrategy.componentRef.instance"
                         _methods="_ngElementStrategy.componentRef.instance" 
                        style="font-size:14px;color:black;"></my-text-005967627929215125></div>
<div style="margin-left:11px;"><my-input-7813608132388248 _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"
                    type="text" 
               ></my-input-7813608132388248></div>
</div>
</div>
</my-dialog-6717820392505807>`;
        constructor(){
          super();
          this.innerHTML = this.template;
        }
      }
    );
    class MyText282622780547952 extends TextComponent{
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
          MyText282622780547952.ɵcmp.factory = () => { return new MyText282622780547952()};
          customElements.define('my-text-282622780547952',createCustomElement(MyText282622780547952, {  injector: injector,}));
          class MyInput06734881442177243 extends InputComponent{
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
        MyInput06734881442177243.ɵcmp.factory = () => { return new MyInput06734881442177243()};
        customElements.define('my-input-06734881442177243',createCustomElement(MyInput06734881442177243, {  injector: injector,}));
        class MyText20649044854610987 extends TextComponent{
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
          MyText20649044854610987.ɵcmp.factory = () => { return new MyText20649044854610987()};
          customElements.define('my-text-20649044854610987',createCustomElement(MyText20649044854610987, {  injector: injector,}));
          class MyInput2597028499489755 extends InputComponent{
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
        MyInput2597028499489755.ɵcmp.factory = () => { return new MyInput2597028499489755()};
        customElements.define('my-input-2597028499489755',createCustomElement(MyInput2597028499489755, {  injector: injector,}));
        class MyText9159558549786369 extends TextComponent{
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
          MyText9159558549786369.ɵcmp.factory = () => { return new MyText9159558549786369()};
          customElements.define('my-text-9159558549786369',createCustomElement(MyText9159558549786369, {  injector: injector,}));
          class MyRadio421793671319451 extends RadioComponent{
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
        MyRadio421793671319451.ɵcmp.factory = () => { return new MyRadio421793671319451()};
        customElements.define('my-radio-421793671319451',createCustomElement(MyRadio421793671319451, {  injector: injector}));
        class MyText8780246233814539 extends TextComponent{
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
          MyText8780246233814539.ɵcmp.factory = () => { return new MyText8780246233814539()};
          customElements.define('my-text-8780246233814539',createCustomElement(MyText8780246233814539, {  injector: injector,}));
          class MyRadio3909592550065868 extends RadioComponent{
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
        MyRadio3909592550065868.ɵcmp.factory = () => { return new MyRadio3909592550065868()};
        customElements.define('my-radio-3909592550065868',createCustomElement(MyRadio3909592550065868, {  injector: injector}));
        class MyText0005081319010313834 extends TextComponent{
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
          MyText0005081319010313834.ɵcmp.factory = () => { return new MyText0005081319010313834()};
          customElements.define('my-text-0005081319010313834',createCustomElement(MyText0005081319010313834, {  injector: injector,}));
          class MyDatePicker7516271641329375 extends MyDatePickerComponent{
              constructor(){
                super();
                let vm = document.querySelector('my-date-7516271641329375');
                setTimeout(()=>{
                  let params = {"date":""};
                  console.log(params)
                  Object.keys(params).map(key=>{
                    vm._instance.ctx._.data[key] = params[key]
                  })
                });
              }
              get date(){
                let vm = document.querySelector('my-date-7516271641329375');
                return {
                  start:(vm._instance.ctx._.data.date || [])[0],
                  end:(vm._instance.ctx._.data.date || [])[1]
                }
              }
            }
            customElements.define('my-date-7516271641329375',MyDatePicker7516271641329375);
            class MyButton743437110494445 extends ButtonComponent{
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
           MyButton743437110494445.ɵcmp.factory = () => { return new MyButton743437110494445()};
           customElements.define('my-button-743437110494445',createCustomElement(MyButton743437110494445, {  injector: injector,}));
           class MyButton18855217774316269 extends ButtonComponent{
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
           MyButton18855217774316269.ɵcmp.factory = () => { return new MyButton18855217774316269()};
           customElements.define('my-button-18855217774316269',createCustomElement(MyButton18855217774316269, {  injector: injector,}));
           class MyButton8896173749392469 extends ButtonComponent{
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
           MyButton8896173749392469.ɵcmp.factory = () => { return new MyButton8896173749392469()};
           customElements.define('my-button-8896173749392469',createCustomElement(MyButton8896173749392469, {  injector: injector,}));
           class MyButton8225874907447199 extends ButtonComponent{
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
           MyButton8225874907447199.ɵcmp.factory = () => { return new MyButton8225874907447199()};
           customElements.define('my-button-8225874907447199',createCustomElement(MyButton8225874907447199, {  injector: injector,}));
           class MyButton7239280382558448 extends ButtonComponent{
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
           MyButton7239280382558448.ɵcmp.factory = () => { return new MyButton7239280382558448()};
           customElements.define('my-button-7239280382558448',createCustomElement(MyButton7239280382558448, {  injector: injector,}));
           class MyTable03539972137059588 extends TableComponent{
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
         MyTable03539972137059588.ɵcmp.factory = () => { return new MyTable03539972137059588()};
         customElements.define('my-table-03539972137059588',createCustomElement(MyTable03539972137059588, {  injector: injector,}));
         class MyAPI5731483860384949 extends RequestComponent{
               constructor(){
                   super(RequestComponent.httpCopy);
                   this.method = 'get'
this.api = 'https://www.fastmock.site/mock/14c2723aefa052a75b2a6feeed0cf387/suger/records'
               }
           }
           MyAPI5731483860384949.ɵcmp.factory = () => { return new MyAPI5731483860384949()};
           customElements.define('my-api-5731483860384949',createCustomElement(MyAPI5731483860384949, {  injector: injector,}));
           class MyDialogModel6717820392505807 extends DialogComponent{
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
           MyDialogModel6717820392505807.ɵcmp.factory = () => { return new MyDialogModel6717820392505807()};
           customElements.define('my-dialog-6717820392505807',createCustomElement(MyDialogModel6717820392505807,{injector}));
                 class MyInput30853443952982396 extends InputComponent{
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
        MyInput30853443952982396.ɵcmp.factory = () => { return new MyInput30853443952982396()};
        customElements.define('my-input-30853443952982396',createCustomElement(MyInput30853443952982396, {  injector: injector,}));
        class MyText3442113088017136 extends TextComponent{
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
          MyText3442113088017136.ɵcmp.factory = () => { return new MyText3442113088017136()};
          customElements.define('my-text-3442113088017136',createCustomElement(MyText3442113088017136, {  injector: injector,}));
          class MyText005967627929215125 extends TextComponent{
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
          MyText005967627929215125.ɵcmp.factory = () => { return new MyText005967627929215125()};
          customElements.define('my-text-005967627929215125',createCustomElement(MyText005967627929215125, {  injector: injector,}));
          class MyInput7813608132388248 extends InputComponent{
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
        MyInput7813608132388248.ɵcmp.factory = () => { return new MyInput7813608132388248()};
        customElements.define('my-input-7813608132388248',createCustomElement(MyInput7813608132388248, {  injector: injector,}));
        ;
            (()=>{
                const sourceDOM = document.querySelector('my-button-743437110494445'),
                    targetDOM = document.querySelector('my-api-5731483860384949'),
                    targetPath = (targetDOM.getAttribute('_methods')||'').split('.');
                sourceDOM.addEventListener('click', (e)=>{
                  let targetIns = targetPath.length ? targetPath.reduce((pre,key)=>key ? pre[key] : pre,targetDOM) : targetDOM;
                  targetIns['request']();
                });
            })();
              
            (()=>{
              const sourceDOM = document.querySelector('my-api-5731483860384949'),
                    targetDOM = document.querySelector('my-table-03539972137059588'),
                    sourcePath = (sourceDOM.getAttribute('_data')||'').split('.'),
                    targetPath = (targetDOM.getAttribute('_data')||'').split('.');
              sourceDOM.addEventListener('success200',()=>{
                let sourceIns = sourcePath.length ? sourcePath.reduce((pre,key)=>key ? pre[key] : pre,sourceDOM) : sourceDOM,
                    targetIns = targetPath.length ? targetPath.reduce((pre,key)=>key ? pre[key] : pre,targetDOM) : targetDOM;
                targetIns.list = sourceIns.list;
              })
            })();
          
            (()=>{
              const sourceDOM = document.querySelector('my-table-03539972137059588'),
                    targetDOM = document.querySelector('my-input-30853443952982396'),
                    sourcePath = (sourceDOM.getAttribute('_data')||'').split('.'),
                    targetPath = (targetDOM.getAttribute('_data')||'').split('.');
              sourceDOM.addEventListener('edit',()=>{
                let sourceIns = sourcePath.length ? sourcePath.reduce((pre,key)=>key ? pre[key] : pre,sourceDOM) : sourceDOM,
                    targetIns = targetPath.length ? targetPath.reduce((pre,key)=>key ? pre[key] : pre,targetDOM) : targetDOM;
                targetIns.value = sourceIns.item.name;
              })
            })();
          
            (()=>{
              const sourceDOM = document.querySelector('my-table-03539972137059588'),
                    targetDOM = document.querySelector('my-input-7813608132388248'),
                    sourcePath = (sourceDOM.getAttribute('_data')||'').split('.'),
                    targetPath = (targetDOM.getAttribute('_data')||'').split('.');
              sourceDOM.addEventListener('edit',()=>{
                let sourceIns = sourcePath.length ? sourcePath.reduce((pre,key)=>key ? pre[key] : pre,sourceDOM) : sourceDOM,
                    targetIns = targetPath.length ? targetPath.reduce((pre,key)=>key ? pre[key] : pre,targetDOM) : targetDOM;
                targetIns.value = sourceIns.item.name;
              })
            })();
          
            (()=>{
                const sourceDOM = document.querySelector('my-table-03539972137059588'),
                    targetDOM = document.querySelector('my-dialog-6717820392505807'),
                    targetPath = (targetDOM.getAttribute('_methods')||'').split('.');
                sourceDOM.addEventListener('edit', (e)=>{
                  let targetIns = targetPath.length ? targetPath.reduce((pre,key)=>key ? pre[key] : pre,targetDOM) : targetDOM;
                  targetIns['visibleChange']();
                });
            })();
              
    