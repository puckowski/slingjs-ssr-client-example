import { textNode, markup } from '../../../node_modules/slingjs/sling.min';

class Test2Component {
    constructor() {
        this.state = false;
    }

    functionToBeHydrated() {
        this.state = true;
    }

    view() {
        return markup('div', {
            attrs: {
                id: 'divrouteroutlet',
                slssrclass: 'Test2Component'
            },
            children: [
                markup('button', {
                    attrs: {
                        onclick: this.functionToBeHydrated.bind(this)
                    },
                    children: [
                        textNode('Call Hydrated Function')
                    ]
                }),
                ...(this.state === false ? [markup('div', {
                    attrs: {
                        style: 'color: blue;'
                    },
                    children: [
                        textNode('State false.')
                    ]
                })] : [
                    markup('div', {
                        attrs: {
                            style: 'color: green;'
                        },
                        children: [
                            textNode('State true.')
                        ]
                    })
                ]),
            ]
        })
    }
}

export default Test2Component;
