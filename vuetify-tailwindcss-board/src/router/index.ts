import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import VuetifyBoardList from "../page/VuetifyBoardList.vue";
import VuetifyBoardRegister from "../page/VuetifyBoardRegister.vue";
import VuetifyBoardRead from "../page/VuetifyBoardRead.vue";
import VuetifyBoardModify from "../page/VuetifyBoardModify.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/vuetify-board-app',
    },
    {
        path: '/vuetify-board-app',
        name: 'VuetifyBoardList',
        component: VuetifyBoardList
    },
    {
        path: '/vuetify-board-app/register',
        name: 'VuetifyBoardRegister',
        component: VuetifyBoardRegister,
    },
    {
        path: '/vuetify-board-app/read/:boardId',
        name: 'VuetifyBoardRead',
        components: { default: VuetifyBoardRead },
        props: { default: true },
    },
    {
        path: '/vuetify-board-app/modify/:boardId',
        name: 'VuetifyBoardModify',
        components: { default: VuetifyBoardModify },
        props: { default: true },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
