import { createApp } from 'vue';
import router from '../router';
import VuetifyBoardRegister from '../page/VuetifyBoardRegister.vue';

import "../index.scss";

import { loadFonts } from "../plugins/webfontloader";

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives';
import * as labsComponents from 'vuetify/labs/components'
import { createVuetify } from "vuetify";

import boardModule from '../store/index'

import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/dist/vuetify.min.css'

const boardRegisterBootstrapMount = (el: string | Element) => {

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

        const boardRegisterBootstrap = createApp(VuetifyBoardRegister).use(vuetify).use(boardModule).use(router);
        boardRegisterBootstrap.mount(el);
    });
};

export { boardRegisterBootstrapMount }