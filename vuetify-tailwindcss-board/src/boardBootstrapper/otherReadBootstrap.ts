import { createApp } from "vue";

import "../index.scss";

import App from "../App.vue";

import { loadFonts } from "../plugins/webfontloader";

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives';
import * as labsComponents from 'vuetify/labs/components'
import { createVuetify } from "vuetify";

import boardModule from '../store/index'
import router from '../router'

const readBootstrapMount = (el: string | Element, boardId: string) => {
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
        router.push({ name: 'VuetifyBoardRead', params: { boardId } }).then(() => {
            app.mount(el);
        });
    });
};

export { readBootstrapMount }