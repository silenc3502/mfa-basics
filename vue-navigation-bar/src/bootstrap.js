import { createApp } from 'vue';
import NavigationBarPage from './page/NavigationBarPage.vue';

import '@mdi/font/css/materialdesignicons.css'
import {loadFonts} from "./plugins/webfontloader";

import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

import App from "./App.vue";

const navigationBarMount = (el) => {

  loadFonts()

  const vuetify = createVuetify({
    components,
    directives,
  });

  const app = createApp(App)
      .use(vuetify)
      .mount(el);
};

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#navigation-bar');

  if (devRoot) {
    navigationBarMount(devRoot);
  }
}

export { navigationBarMount };
