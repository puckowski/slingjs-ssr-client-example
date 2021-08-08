import { textNode, markup } from '../../../dist/sling.min';

class Test1Component {
    view() {
        return markup('div', {
            attrs: {
                id: 'divrouteroutlet',
                slssrclass: 'Test1Component'
            },
            children: [
                markup('span', {
                    children: [
                        textNode('Plain text')
                    ]
                }),
                textNode('DOMString')
            ]
        })
    }
}

export default Test1Component;
