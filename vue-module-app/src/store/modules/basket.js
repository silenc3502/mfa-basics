import axiosInst from "../../utility/axiosObject";

export default {
    namespaced: true,
    state: () => ({
        menus: [],
    }),
    actions: {
        requestCreateBoardToSpring({}, payload) {

            return axiosInst.post('/jpa-board/register',
                { title: "gogosing", content: "letsgo", writer: "attack" })
                .then((res) => {
                    alert('게시물 등록 성공: ' + JSON.stringify(res.data))
                    return res
                })
                .catch(() => {
                    alert('문제 발생!')
                })
        },
    },
    mutations: {
        addMenu(state, value) {
            state.menus.push(value);
        },
    },
    getters: {
        menus(state) {
            return state.menus;
        },
        totalPrice(state) {
            return state.menus.reduce((sum, value) => sum + value.price, 0);
        },
    },
};