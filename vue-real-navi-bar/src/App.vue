<template>

    <NavigationBarPage/>
  
</template>

<script lang="ts">
import 'vuetify/dist/vuetify.min.css'
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
