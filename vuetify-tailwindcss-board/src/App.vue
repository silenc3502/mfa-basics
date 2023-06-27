<template>
  <v-app class="board-app">
    <router-view/>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import VuetifyBoardList from './page/VuetifyBoardList.vue';

import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/dist/vuetify.min.css'

export default defineComponent({
  name: 'App',
  components: {
    VuetifyBoardList
  },
})

</script>