import { createApp } from "vue";

import "./index.scss";

import App from "./App.vue";

import { loadFonts } from "./plugins/webfontloader";

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives';
import * as labsComponents from 'vuetify/labs/components'
import { createVuetify, VuetifyOptions } from "vuetify";

import boardModule from './store/index'
import router from './router'
import VuetifyBoardRegister from "./page/VuetifyBoardRegister.vue";

const vuetifyTailwindBoardMount = (el: string | Element) => {

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

        const app = createApp(App).use(vuetify).use(boardModule).use(router);
        // app.component('VuetifyBoardRegister', VuetifyBoardRegister)
        app.mount(el);
    });
};

const root = document.querySelector('#vuetify-tailwindcss-board')

if (root) { vuetifyTailwindBoardMount(root) }

export { vuetifyTailwindBoardMount }