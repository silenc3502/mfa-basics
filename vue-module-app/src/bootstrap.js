import { createApp } from 'vue';
import Sample from './components/Sample.vue';
import store from "./store";

const mount = (el) => {
  const app = createApp(Sample).use(store).mount(el);;
};

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_vue-dev-root');

  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };
