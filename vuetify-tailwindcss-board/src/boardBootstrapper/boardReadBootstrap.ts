import {createApp, inject, defineComponent} from 'vue';
import router from '../router';
import VuetifyBoardRead from "../page/VuetifyBoardRead.vue";

import "../index.scss";

import { loadFonts } from "../plugins/webfontloader";

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives';
import * as labsComponents from 'vuetify/labs/components'
import { createVuetify } from "vuetify";

import boardModule from '../store/index'

import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/dist/vuetify.min.css'

const boardReadBootstrapMount = (el: string | Element, boardId: string) => {
    console.log('bootstrap mount - boardId: ' + boardId)

    loadFonts().then(() => {
        const vuetify = createVuetify({
            components: {
                ...components,
                ...labsComponents,
            },
            directives: {
                ...directives,
            },
        });

        console.log('Before defining boardReadComponent');

        const boardReadComponent = defineComponent({
            components: {
                VuetifyBoardRead
            },
            template: '<VuetifyBoardRead :board-id="boardId" />',
            setup() {
                console.log('boardId from inject:', boardId);
                return { boardId };
            },
        });

        console.log('Before createApp');

        const boardReadBootstrap = createApp(boardReadComponent); // 수정된 부분
        boardReadBootstrap.use(vuetify).use(boardModule).use(router);
        boardReadBootstrap.component('VuetifyBoardRead', boardReadComponent);

        console.log('provide - boardId: ' + boardId);

        boardReadBootstrap.provide('boardId', boardId);
        boardReadBootstrap.mount(el);
    });
};

export { boardReadBootstrapMount }