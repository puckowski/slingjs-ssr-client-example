import { textNode, markup, hydrate, detectChanges, detachDetector } from '../../../dist/sling.min';
import { slGet } from '../../../dist/sling-xhr.min';

class NavComponent {
    constructor() {
        this.ssrContent = '';
        this.rootRoute = 'http://127.0.0.1:1337/';
        this.hydrateRoute = this.rootRoute + 'hydrate';
    }

    navigateToHydrate() {
        slGet(this.hydrateRoute)
            .then(resp => {
                this.ssrContent = resp.response;
                detachDetector('divrouteroutlet');
                detectChanges();
                hydrate('divrouteroutlet');
            });
    }

    navigateToRoot() {
        slGet(this.rootRoute)
            .then(resp => {
                this.ssrContent = resp.response;
                detachDetector('divrouteroutlet');
                detectChanges();
                hydrate('divrouteroutlet');
            });
    }

    view() {
        return markup('div', {
            attrs: {
                id: 'divnav',
            },
            children: [
                textNode('Select a route to navigate to.'),
                markup('button', {
                    attrs: {
                        onclick: this.navigateToHydrate.bind(this)
                    },
                    children: [
                        textNode('Hydrate Route')
                    ]
                }),
                markup('button', {
                    attrs: {
                        onclick: this.navigateToRoot.bind(this)
                    },
                    children: [
                        textNode('Root Route')
                    ]
                }),
                markup('div', {
                    attrs: {
                        sltrustchildren: 'true'
                    },
                    children: [
                        textNode(this.ssrContent)
                    ]
                })
            ]
        })
    }
}

export default NavComponent;
