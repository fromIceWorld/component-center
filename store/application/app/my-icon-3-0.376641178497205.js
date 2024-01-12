
    
    customElements.define('my-icon-3',
      class MyComponent extends HTMLElement{
        template = `<div style="padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;width:100%;"><my-button-04855029904840813 _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"></my-button-04855029904840813><my-icon-5762015127794791 _data="_ngElementStrategy.componentRef.instance" 
                        _methods="_ngElementStrategy.componentRef.instance"></my-icon-5762015127794791></div>`;
        constructor(){
          super();
          this.innerHTML = this.template;
        }
      }
    );
    class MyButton04855029904840813 extends ButtonComponent{
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
           MyButton04855029904840813.ɵcmp.factory = () => { return new MyButton04855029904840813()};
           customElements.define('my-button-04855029904840813',createCustomElement(MyButton04855029904840813, {  injector: injector,}));
           class MyIcon5762015127794791 extends IconComponent{
             constructor(){
                 super();
                 this['fontSize'] = '16px'
this['icon'] = '#icon-tubiao'
             }
         }
         MyIcon5762015127794791.ɵcmp.factory = () => { return new MyIcon5762015127794791()};
         customElements.define('my-icon-5762015127794791',createCustomElement(MyIcon5762015127794791, {  injector: injector}));
         ;
    