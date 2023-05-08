<template>
  <v-app>
    <v-main>
      <NavigationBarPage/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavigationBarPage from "./page/NavigationBarPage.vue";

export default defineComponent({
  name: 'App',

  components: {
    NavigationBarPage
  },

  data () {
    return {
      //
    }
  },
})
</script>
