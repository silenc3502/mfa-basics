<template>
  <div>
    <ul>
      <li v-for="(menu, index) in menus" :key="index">{{ menu.name }} : {{ menu.price }}</li>
    </ul>
    <h3>총 : {{ totalPrice }}</h3>
      <button @click="boardRequest(0)">게시물 작성</button>
  </div>
</template>

<script>

import { defineComponent, reactive } from 'vue';
import { mapActions, useStore} from 'vuex'

const basket = 'basket'

export default defineComponent({
    name: "Basket",
    setup() {
        const menus = reactive([
            { name: "후라이드", price: 10000 },
            { name: "양념", price: 11000 },
            { name: "반반", price: 11000 },
        ]);

        const store = useStore();
        //const totalPrice = computed(() => store.getters.totalPrice);
        //const totalPrice = store.getters["basket/totalPrice"]
        const totalPrice = menus[0].price + menus[1].price + menus[2].price

        return { menus, totalPrice };
    },
    methods: {
        ...mapActions (basket, [
            'requestCreateBoardToSpring'
        ]),
        boardRequest(payload) {
            this.requestCreateBoardToSpring({}, payload)
        }
    }
});

</script>
