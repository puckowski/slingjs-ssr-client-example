import { textNode, markup } from '../../../node_modules/slingjs/sling.min';

class Test3Component {
    view() {
        return markup('div', {
            attrs: {
                id: 'divroot',
            },
            children: [
                markup('span', {
                    children: [
                        textNode('Root text')
                    ]
                }),
                new Test2Component(),
                textNode('Text node')
            ]
        })
    }
}

export default Test3Component;
