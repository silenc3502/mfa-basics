import { createApp } from "vue";

import "../public/index.scss";

import App from "./App.vue";

import { loadFonts } from './plugins/webfontloader'

import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { createVuetify } from "vuetify";

const realNaviBarMount = (el: string | Element) => {

    loadFonts()

    const vuetify = createVuetify({
        components,
        directives,
    });

    createApp(App)
        .use(vuetify)
        .mount(el)
}

const devRoot = document.querySelector('#real-navi-bar');

if (devRoot) {
    realNaviBarMount(devRoot);
}

export { realNaviBarMount };