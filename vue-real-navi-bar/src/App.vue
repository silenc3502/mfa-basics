<template>
  <div style="height: 64px;">
    <v-app>
      <NavigationBarPage/>
    </v-app>
  </div>
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
