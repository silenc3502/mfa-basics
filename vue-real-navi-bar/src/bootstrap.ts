import { createApp } from "vue";

import "../public/index.scss";

import App from "./App.vue";

import { loadFonts } from './plugins/webfontloader'

import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import * as labsComponents from 'vuetify/labs/components'
import { createVuetify } from "vuetify";

const realNaviBarMount = (el: string | Element) => {

    loadFonts().then(() => { // Promise가 처리될 때까지 기다립니다.
        const vuetify = createVuetify({
            components: {
                ...components,
                ...labsComponents,
            },
            directives: {
                ...directives,
            },
        });

        const app = createApp(App).use(vuetify);
        app.mount(el);
    });

    // const vuetify = createVuetify({
    //     components,
    //     directives,
    // });

    // createApp(App)
    //     .use(vuetify)
    //     .mount(el)
}

const devRoot = document.querySelector('#real-navi-bar');

if (devRoot) {
    realNaviBarMount(devRoot);
}

export { realNaviBarMount };