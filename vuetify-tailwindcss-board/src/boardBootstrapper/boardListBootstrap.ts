import { createApp, defineComponent } from 'vue';
import router from '../router';
import VuetifyBoardList from '../page/VuetifyBoardList.vue';

import "../index.scss";

import { loadFonts } from "../plugins/webfontloader";

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives';
import * as labsComponents from 'vuetify/labs/components'
import { createVuetify } from "vuetify";

import boardModule from '../store/index'

import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/dist/vuetify.min.css'

const boardListBootstrapMount = (el: string | Element) => {

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

        const boardListComponent = defineComponent({
            components: {
                VuetifyBoardList
            },
            template: '<VuetifyBoardList/>',
        });

        const boardListBootstrap = createApp(boardListComponent)
        boardListBootstrap.use(vuetify).use(boardModule).use(router);
        boardListBootstrap.mount(el);
    });
};

export { boardListBootstrapMount }