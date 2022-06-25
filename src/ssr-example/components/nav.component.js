import { textNode, markup, hydrate, detectChanges, detachDetector } from '../../../node_modules/slingjs/sling.min';
import { slGet } from '../../../node_modules/slingjs/sling-xhr.min';

class NavComponent {
    constructor() {
        this.ssrContent = '';
        this.rootRoute = 'http://127.0.0.1:1337/';
        this.hydrateRoute = this.rootRoute + 'hydrate';
        this.hydrateIslandRoute = this.rootRoute + 'hydratecomplex';
    }

    navigateToIsland() {
        slGet(this.hydrateIslandRoute)
            .then(resp => {
                this.ssrContent = resp.response;
                detachDetector('divrouteroutlet');
                detectChanges();
                hydrate('divrouteroutlet');
            });
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
                markup('button', {
                    attrs: {
                        onclick: this.navigateToIsland.bind(this)
                    },
                    children: [
                        textNode('Hydrate Island Route')
                    ]
                }),
                markup('div', {
                    attrs: {
                        sldirective: 'trustchildren'
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
