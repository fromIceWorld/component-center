
    
    customElements.define('my-version-2',
      class MyComponent extends HTMLElement{
        template = `<div style="padding: 4px;"><div style="margin-bottom:7px;"><div style="padding: 4px;display:flex;flex-wrap:wrap;justify-content:flex-start"><div style="margin-left:-3px;"><my-text-7758730676406402 _data="_ngElementStrategy.componentRef.instance"
                         _methods="_ngElementStrategy.componentRef.instance" 
                        style="font-size:14px;color:black;"></my-text-7758730676406402></div>
<div style="margin-left:1px;"><my-input-832343118409997 _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"
                    type="text" 
               ></my-input-832343118409997></div>
<div style="margin-left:13px;"><my-text-07456362276114481 _data="_ngElementStrategy.componentRef.instance"
                         _methods="_ngElementStrategy.componentRef.instance" 
                        style="font-size:14px;color:black;"></my-text-07456362276114481></div>
<div style="margin-left:1px;"><my-input-695242222387475 _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"
                    type="text" 
               ></my-input-695242222387475></div>
<div style="margin-left:7px;"><my-text-6988905742906693 _data="_ngElementStrategy.componentRef.instance"
                         _methods="_ngElementStrategy.componentRef.instance" 
                        style="font-size:14px;color:black;"></my-text-6988905742906693></div>
<div style="margin-left:7px;"><my-radio-2119513998393998 _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"></my-radio-2119513998393998></div>
<div style="margin-left:4px;"><my-text-5110013515089953 _data="_ngElementStrategy.componentRef.instance"
                         _methods="_ngElementStrategy.componentRef.instance" 
                        style="font-size:14px;color:black;"></my-text-5110013515089953></div>
<div style="margin-left:3px;"><my-radio-05434915119809225 _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"></my-radio-05434915119809225></div>
<div style="margin-left:5px;"><my-text-25230977669383114 _data="_ngElementStrategy.componentRef.instance"
                         _methods="_ngElementStrategy.componentRef.instance" 
                        style="font-size:14px;color:black;"></my-text-25230977669383114></div>
<div style="margin-left:3px;"><my-date-8095951686828702 _data="_instance.ctx._.data" _methods="_instance.ctx"></my-date-8095951686828702></div>
<div style="margin-left:13px;"><my-button-3419323975073847 _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"></my-button-3419323975073847></div>
</div>
</div>
<div style="margin-bottom:7.5px;margin-top:7px;"><div style="padding: 4px;display:flex;flex-wrap:wrap;justify-content:flex-start"><div style="margin-left:2px;"><my-button-5589209906111059 _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"></my-button-5589209906111059></div>
<div style="margin-left:14px;"><my-button-2817694622789646 _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"></my-button-2817694622789646></div>
<div style="margin-left:9px;"><my-button-7595930124001209 _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"></my-button-7595930124001209></div>
<div style="margin-left:14px;"><my-button-7456165797598568 _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"></my-button-7456165797598568></div>
</div>
</div>
<div style="margin-bottom:22.5px;margin-top:7.5px;"><div style="padding: 4px;display:flex;flex-wrap:wrap;justify-content:flex-start"><div style="margin-left:-4px;"><my-table-4775664838197715 _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"></my-table-4775664838197715></div>
</div>
</div>
<div style="margin-top:22.5px;"><div style="padding: 4px;display:flex;flex-wrap:wrap;justify-content:flex-end"><div style="margin-left:995px;"><my-api-3905770365923855 _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"></my-api-3905770365923855></div>
</div>
</div>
</div><my-dialog-45493834363115115 _data="_ngElementStrategy.componentRef.instance" 
                         _methods="_ngElementStrategy.componentRef.instance"
                         style="display:flex;'flex-direction:undefined"><div style="margin-bottom:-19.5px;"><div style="padding: 4px;display:flex;flex-wrap:wrap;justify-content:flex-end"><div style="margin-left:81px;"><my-input-905045382785912 _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"
                    type="text" 
               ></my-input-905045382785912></div>
</div>
</div>
<div style="margin-bottom:4px;margin-top:-19.5px;"><div style="padding: 4px;display:flex;flex-wrap:wrap;justify-content:flex-start"><div style="margin-left:-4px;"><my-text-48604666426057874 _data="_ngElementStrategy.componentRef.instance"
                         _methods="_ngElementStrategy.componentRef.instance" 
                        style="font-size:14px;color:black;"></my-text-48604666426057874></div>
</div>
</div>
<div style="margin-top:4px;"><div style="padding: 4px;display:flex;flex-wrap:wrap;justify-content:flex-end"><div style="margin-left:3px;"><my-text-13711329957930274 _data="_ngElementStrategy.componentRef.instance"
                         _methods="_ngElementStrategy.componentRef.instance" 
                        style="font-size:14px;color:black;"></my-text-13711329957930274></div>
<div style="margin-left:11px;"><my-input-1338089095465156 _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"
                    type="text" 
               ></my-input-1338089095465156></div>
</div>
</div>
</my-dialog-45493834363115115>`;
        constructor(){
          super();
          this.innerHTML = this.template;
        }
      }
    );
    class MyText7758730676406402 extends TextComponent{
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
          MyText7758730676406402.ɵcmp.factory = () => { return new MyText7758730676406402()};
          customElements.define('my-text-7758730676406402',createCustomElement(MyText7758730676406402, {  injector: injector,}));
          class MyInput832343118409997 extends InputComponent{
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
        MyInput832343118409997.ɵcmp.factory = () => { return new MyInput832343118409997()};
        customElements.define('my-input-832343118409997',createCustomElement(MyInput832343118409997, {  injector: injector,}));
        class MyText07456362276114481 extends TextComponent{
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
          MyText07456362276114481.ɵcmp.factory = () => { return new MyText07456362276114481()};
          customElements.define('my-text-07456362276114481',createCustomElement(MyText07456362276114481, {  injector: injector,}));
          class MyInput695242222387475 extends InputComponent{
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
        MyInput695242222387475.ɵcmp.factory = () => { return new MyInput695242222387475()};
        customElements.define('my-input-695242222387475',createCustomElement(MyInput695242222387475, {  injector: injector,}));
        class MyText6988905742906693 extends TextComponent{
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
          MyText6988905742906693.ɵcmp.factory = () => { return new MyText6988905742906693()};
          customElements.define('my-text-6988905742906693',createCustomElement(MyText6988905742906693, {  injector: injector,}));
          class MyRadio2119513998393998 extends RadioComponent{
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
        MyRadio2119513998393998.ɵcmp.factory = () => { return new MyRadio2119513998393998()};
        customElements.define('my-radio-2119513998393998',createCustomElement(MyRadio2119513998393998, {  injector: injector}));
        class MyText5110013515089953 extends TextComponent{
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
          MyText5110013515089953.ɵcmp.factory = () => { return new MyText5110013515089953()};
          customElements.define('my-text-5110013515089953',createCustomElement(MyText5110013515089953, {  injector: injector,}));
          class MyRadio05434915119809225 extends RadioComponent{
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
        MyRadio05434915119809225.ɵcmp.factory = () => { return new MyRadio05434915119809225()};
        customElements.define('my-radio-05434915119809225',createCustomElement(MyRadio05434915119809225, {  injector: injector}));
        class MyText25230977669383114 extends TextComponent{
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
          MyText25230977669383114.ɵcmp.factory = () => { return new MyText25230977669383114()};
          customElements.define('my-text-25230977669383114',createCustomElement(MyText25230977669383114, {  injector: injector,}));
          class MyDatePicker8095951686828702 extends MyDatePickerComponent{
              constructor(){
                super();
                let vm = document.querySelector('my-date-8095951686828702');
                setTimeout(()=>{
                  let params = {"date":""};
                  console.log(params)
                  Object.keys(params).map(key=>{
                    vm._instance.ctx._.data[key] = params[key]
                  })
                });
              }
              get date(){
                let vm = document.querySelector('my-date-8095951686828702');
                return {
                  start:(vm._instance.ctx._.data.date || [])[0],
                  end:(vm._instance.ctx._.data.date || [])[1]
                }
              }
            }
            customElements.define('my-date-8095951686828702',MyDatePicker8095951686828702);
            class MyButton3419323975073847 extends ButtonComponent{
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
           MyButton3419323975073847.ɵcmp.factory = () => { return new MyButton3419323975073847()};
           customElements.define('my-button-3419323975073847',createCustomElement(MyButton3419323975073847, {  injector: injector,}));
           class MyButton5589209906111059 extends ButtonComponent{
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
           MyButton5589209906111059.ɵcmp.factory = () => { return new MyButton5589209906111059()};
           customElements.define('my-button-5589209906111059',createCustomElement(MyButton5589209906111059, {  injector: injector,}));
           class MyButton2817694622789646 extends ButtonComponent{
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
           MyButton2817694622789646.ɵcmp.factory = () => { return new MyButton2817694622789646()};
           customElements.define('my-button-2817694622789646',createCustomElement(MyButton2817694622789646, {  injector: injector,}));
           class MyButton7595930124001209 extends ButtonComponent{
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
           MyButton7595930124001209.ɵcmp.factory = () => { return new MyButton7595930124001209()};
           customElements.define('my-button-7595930124001209',createCustomElement(MyButton7595930124001209, {  injector: injector,}));
           class MyButton7456165797598568 extends ButtonComponent{
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
           MyButton7456165797598568.ɵcmp.factory = () => { return new MyButton7456165797598568()};
           customElements.define('my-button-7456165797598568',createCustomElement(MyButton7456165797598568, {  injector: injector,}));
           class MyTable4775664838197715 extends TableComponent{
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
         MyTable4775664838197715.ɵcmp.factory = () => { return new MyTable4775664838197715()};
         customElements.define('my-table-4775664838197715',createCustomElement(MyTable4775664838197715, {  injector: injector,}));
         class MyAPI3905770365923855 extends RequestComponent{
               constructor(){
                   super(RequestComponent.httpCopy);
                   this.method = 'get'
this.api = 'https://www.fastmock.site/mock/14c2723aefa052a75b2a6feeed0cf387/suger/records'
               }
           }
           MyAPI3905770365923855.ɵcmp.factory = () => { return new MyAPI3905770365923855()};
           customElements.define('my-api-3905770365923855',createCustomElement(MyAPI3905770365923855, {  injector: injector,}));
           class MyDialogModel45493834363115115 extends DialogComponent{
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
           MyDialogModel45493834363115115.ɵcmp.factory = () => { return new MyDialogModel45493834363115115()};
           customElements.define('my-dialog-45493834363115115',createCustomElement(MyDialogModel45493834363115115,{injector}));
                 class MyInput905045382785912 extends InputComponent{
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
        MyInput905045382785912.ɵcmp.factory = () => { return new MyInput905045382785912()};
        customElements.define('my-input-905045382785912',createCustomElement(MyInput905045382785912, {  injector: injector,}));
        class MyText48604666426057874 extends TextComponent{
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
          MyText48604666426057874.ɵcmp.factory = () => { return new MyText48604666426057874()};
          customElements.define('my-text-48604666426057874',createCustomElement(MyText48604666426057874, {  injector: injector,}));
          class MyText13711329957930274 extends TextComponent{
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
          MyText13711329957930274.ɵcmp.factory = () => { return new MyText13711329957930274()};
          customElements.define('my-text-13711329957930274',createCustomElement(MyText13711329957930274, {  injector: injector,}));
          class MyInput1338089095465156 extends InputComponent{
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
        MyInput1338089095465156.ɵcmp.factory = () => { return new MyInput1338089095465156()};
        customElements.define('my-input-1338089095465156',createCustomElement(MyInput1338089095465156, {  injector: injector,}));
        ;
            (()=>{
                const sourceDOM = document.querySelector('my-button-3419323975073847'),
                    targetDOM = document.querySelector('my-api-3905770365923855'),
                    targetPath = (targetDOM.getAttribute('_methods')||'').split('.');
                sourceDOM.addEventListener('click', (e)=>{
                  let targetIns = targetPath.length ? targetPath.reduce((pre,key)=>key ? pre[key] : pre,targetDOM) : targetDOM;
                  targetIns['request']();
                });
            })();
              
            (()=>{
              const sourceDOM = document.querySelector('my-api-3905770365923855'),
                    targetDOM = document.querySelector('my-table-4775664838197715'),
                    sourcePath = (sourceDOM.getAttribute('_data')||'').split('.'),
                    targetPath = (targetDOM.getAttribute('_data')||'').split('.');
              sourceDOM.addEventListener('success200',()=>{
                let sourceIns = sourcePath.length ? sourcePath.reduce((pre,key)=>key ? pre[key] : pre,sourceDOM) : sourceDOM,
                    targetIns = targetPath.length ? targetPath.reduce((pre,key)=>key ? pre[key] : pre,targetDOM) : targetDOM;
                targetIns.list = sourceIns.list;
              })
            })();
          
            (()=>{
              const sourceDOM = document.querySelector('my-table-4775664838197715'),
                    targetDOM = document.querySelector('my-input-905045382785912'),
                    sourcePath = (sourceDOM.getAttribute('_data')||'').split('.'),
                    targetPath = (targetDOM.getAttribute('_data')||'').split('.');
              sourceDOM.addEventListener('edit',()=>{
                let sourceIns = sourcePath.length ? sourcePath.reduce((pre,key)=>key ? pre[key] : pre,sourceDOM) : sourceDOM,
                    targetIns = targetPath.length ? targetPath.reduce((pre,key)=>key ? pre[key] : pre,targetDOM) : targetDOM;
                targetIns.value = sourceIns.item.name;
              })
            })();
          
            (()=>{
              const sourceDOM = document.querySelector('my-table-4775664838197715'),
                    targetDOM = document.querySelector('my-input-1338089095465156'),
                    sourcePath = (sourceDOM.getAttribute('_data')||'').split('.'),
                    targetPath = (targetDOM.getAttribute('_data')||'').split('.');
              sourceDOM.addEventListener('edit',()=>{
                let sourceIns = sourcePath.length ? sourcePath.reduce((pre,key)=>key ? pre[key] : pre,sourceDOM) : sourceDOM,
                    targetIns = targetPath.length ? targetPath.reduce((pre,key)=>key ? pre[key] : pre,targetDOM) : targetDOM;
                targetIns.value = sourceIns.item.name;
              })
            })();
          
            (()=>{
                const sourceDOM = document.querySelector('my-table-4775664838197715'),
                    targetDOM = document.querySelector('my-dialog-45493834363115115'),
                    targetPath = (targetDOM.getAttribute('_methods')||'').split('.');
                sourceDOM.addEventListener('edit', (e)=>{
                  let targetIns = targetPath.length ? targetPath.reduce((pre,key)=>key ? pre[key] : pre,targetDOM) : targetDOM;
                  targetIns['visibleChange']();
                });
            })();
              
    