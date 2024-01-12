
    
    customElements.define('my-auto',
      class MyComponent extends HTMLElement{
        template = `<div style="padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;width:100%;"><my-table-1 _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"></my-table-1></div>`;
        constructor(){
          super();
          this.innerHTML = this.template;
        }
      }
    );
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
         MyTable1.ɵcmp.factory = () => { return new MyTable1()};
         customElements.define('my-table-1',createCustomElement(MyTable1, {  injector: injector,}));
         ;
    