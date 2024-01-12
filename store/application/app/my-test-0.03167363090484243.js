customElements.define(
    'my-test',
    class MyComponent extends HTMLElement {
        template = `<my-api-0 _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"></my-api-0><div style="display:flex;flex-direction:;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;width:100%;"><my-tree-0 _data="_instance.ctx._.data" _methods="_instance.ctx"></my-tree-0><my-button-0 _data="_ngElementStrategy.componentRef.instance" _methods="_ngElementStrategy.componentRef.instance"></my-button-0></div>`;
        constructor() {
            super();
            this.innerHTML = this.template;
        }
    }
);
class MyAPI0 extends APIComponent {
    constructor() {
        super();
        this.method = 'get';
        this.api =
            'https://www.fastmock.site/mock/14c2723aefa052a75b2a6feeed0cf387/suger/records';
    }
}
MyAPI0.ɵcmp.factory = () => {
    return new MyAPI0();
};
customElements.define(
    'my-api-0',
    createCustomElement(MyAPI0, { injector: injector })
);
class MyTree0 extends MyTreeComponent {
    constructor() {
        super();
        let vm = document.querySelector('my-tree-0');
        setTimeout(() => {
            let params = {
                showCheckbox: false,
                tree: [
                    {
                        label: 'Level one 1',
                        id: 'Level one 1',
                        children: [
                            {
                                label: 'Level two 1-1',
                                id: 'Level two 1-1',
                                children: [
                                    {
                                        label: 'Level three 1-1-1',
                                        id: 'Level three 1-1-1',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        label: 'Level one 2',
                        id: 'Level one 2',
                        children: [
                            {
                                label: 'Level two 2-1',
                                id: 'Level two 2-1',
                                children: [
                                    {
                                        label: 'Level three 2-1-1',
                                        id: 'Level three 2-1-1',
                                    },
                                ],
                            },
                            {
                                label: 'Level two 2-2',
                                id: 'Level two 2-2',
                                children: [
                                    {
                                        label: 'Level three 2-2-1',
                                        id: 'Level three 2-2-1',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        label: 'Level one 3',
                        id: 'Level one 3',
                        children: [
                            {
                                label: 'Level two 3-1',
                                id: 'Level two 3-1',
                                children: [
                                    {
                                        label: 'Level three 3-1-1',
                                        id: 'Level three 3-1-1',
                                    },
                                ],
                            },
                            {
                                label: 'Level two 3-2',
                                id: 'Level two 3-2',
                                children: [
                                    {
                                        label: 'Level three 3-2-1',
                                        id: 'Level three 3-2-1',
                                    },
                                ],
                            },
                        ],
                    },
                ],
            };
            console.log(params);
            Object.keys(params).map((key) => {
                vm._instance.ctx._.data[key] = params[key];
            });
        });
    }
}
customElements.define('my-tree-0', MyTree0);
class MyButton0 extends ButtonComponent {
    constructor() {
        super();
        this.disabled = false;
        this.ghost = false;
        this.loading = false;
        this.shape = '';
        this.size = 'default';
        this.type = 'primary';
        this.block = false;
        this.danger = false;
        this.icon = 'search';
        this.name = 'search';
    }
}
MyButton0.ɵcmp.factory = () => {
    return new MyButton0();
};
customElements.define(
    'my-button-0',
    createCustomElement(MyButton0, { injector: injector })
);
(() => {
    const sourceDOM = document.querySelector('my-button-0'),
        targetDOM = document.querySelector('my-api-0'),
        targetPath = (targetDOM.getAttribute('_methods') || '').split('.');
    let targetIns = targetPath.reduce((pre, key) => pre[key], targetDOM);
    sourceDOM.addEventListener('click', (e) => {
        targetIns['request']();
    });
})();

(() => {
    const sourceDOM = document.querySelector('my-api-0'),
        targetDOM = document.querySelector('my-tree-0'),
        sourcePath = (sourceDOM.getAttribute('_data') || '').split('.'),
        targetPath = (targetDOM.getAttribute('_data') || '').split('.');
    let sourceIns = sourcePath.reduce((pre, key) => pre[key], sourceDOM),
        targetIns = targetPath.reduce((pre, key) => pre[key], targetDOM);
    sourceDOM.addEventListener('success200', () => {
        targetIns['tree'] = sourceIns['data'];
    });
})();
