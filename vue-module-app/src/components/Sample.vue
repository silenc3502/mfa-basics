<script setup>

import { ref } from 'vue';
const count = ref(0);

import Basket from "./Basket.vue";

</script>

<template>
  <div style="background-color: lightgreen;">
    <h3>나는 Vue.js</h3>
    <button @click="count++">
      You clicked me {{ count }} times in a <b>vue</b> application!
    </button>
    <Basket/>
  </div>
</template>