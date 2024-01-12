
    
    customElements.define('my-china',
      class MyComponent extends HTMLElement{
        template = `<div id="grid-61591099964327410000" style="z-index: 10;position: relative;"><div id='grid-61591099964327410000-0' style='border-top:1px solid #00000017;border-right:1px solid #00000017;border-bottom:1px solid #00000017;border-left:1px solid #00000017;border-radius:0px;padding:0px;background-color:#fff0;background-image:;background-repeat:no-repeat;background-size:cover;'></div></div><div style="width:100%;height:100%;position: absolute;"><china-map-chart-7393378122198524></china-map-chart-7393378122198524></div>`;
        constructor(){
          super();
          this.innerHTML = this.template;
        }
      }
    );
    (()=>{
      const container = document.querySelector('#grid-61591099964327410000');
      const layout = [{"id":"0","x":0,"y":0,"w":263,"h":112,"minW":10,"minH":6}];
      const config = {"cols":1000,"gap":4,"rowHeight":1,"dimension":"","layout":[{"id":"0","x":0,"y":0,"w":263,"h":112,"minW":10,"minH":6}]};
      function getColumnWidth(config, width) {
        const { cols, gap } = config;
        const widthExcludingGap = width - Math.max(gap * (cols - 1), 0);
        return widthExcludingGap / cols;
    }
    function layoutToRenderItems(config, width, height) {
        const { layout, gap } = config;
        const rowHeightInPixels = config.rowHeight;
        const itemWidthPerColumn = getColumnWidth(config, width);
        const renderItems = {};
        for (const item of layout) {
            renderItems[item.id] = {
                id: item.id,
                top: item.y * rowHeightInPixels + gap * item.y,
                left: item.x * itemWidthPerColumn + gap * item.x,
                width:
                    item.w * itemWidthPerColumn + gap * Math.max(item.w - 1, 0),
                height:
                    item.h * rowHeightInPixels + gap * Math.max(item.h - 1, 0),
            };
        }
        return renderItems;
    }
    configGrid();
    if(true){
      window.addEventListener('resize', () => {
        configGrid();
      });
    }
    
    function configGrid() {
        clientRect = container.getBoundingClientRect();
        const _gridItemsRenderData = layoutToRenderItems(
            config,
            clientRect.width,
            clientRect.height
        );
        console.log(_gridItemsRenderData);
        let children = container.children;
        Object.keys(_gridItemsRenderData).forEach((key, index) => {
            const { height, width, left, top } = _gridItemsRenderData[key];
            children[index].style[
                'transform'
            ] = 'translateX(' + left + 'px) ' + 'translateY(' + top + 'px)';
            children[index].style['display'] = 'block';
            children[index].style['transition'] =
                'transform 500ms ease, width 500ms ease, height 500ms ease';
            children[index].style['position'] = 'absolute';
            children[index].style['height'] = height + 'px';
            children[index].style['width'] = width + 'px';
        });
    }
    })();class ChinaMapChart7393378122198524 extends ChinaMapChartComponent{
                    that;
                    constructor(){
                        super();
                        setTimeout(()=>{
                            let index = Object.keys(this).filter(key=>key.startsWith('__reactContainer'));
                            let ins = this.that = this[index[0]].alternate.child.stateNode;
                            ins.applyData({});
                        },1000);
                    }
                    get config(){
                        console.log('config');
                    }
                    set config(value){
                        console.log('value',value)
                        const {title,data,width,height} = value || {};
                        this.that.applyData({title,data,width,height});
                    }   
                };
                customElements.define('china-map-chart-7393378122198524',ChinaMapChart7393378122198524);
                ;
    