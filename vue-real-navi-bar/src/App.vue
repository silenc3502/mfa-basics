<template>
  <v-app>
    <v-main>
      <HelloWorld/>
      <NavigationBarPage/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import NavigationBarPage from "./page/NavigationBarPage.vue";

export default defineComponent({
  name: 'App',

  components: {
    HelloWorld,
    NavigationBarPage
  },

  data () {
    return {
      //
    }
  },
})
</script>
