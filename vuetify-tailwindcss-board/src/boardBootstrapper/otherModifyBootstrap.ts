import { vuetifyTailwindBoardMount } from "../bootstrap";
import router from "../router";

const modifyBootstrapMount = (el: string | Element, boardId: string) => {
    const vuetifyBoardApp = vuetifyTailwindBoardMount(el)

    const newRoute = {
        name: 'VuetifyBoardModify',
        params: {
            boardId: boardId,
        }
    }

    router.push(newRoute)
};

export { modifyBootstrapMount }