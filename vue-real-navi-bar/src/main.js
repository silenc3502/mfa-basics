import { createApp } from 'vue'
import App from './App.vue'
import { loadFonts } from './plugins/webfontloader'

import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import {createVuetify} from "vuetify";

loadFonts()

const vuetify = createVuetify({
    components,
    directives,
});

createApp(App)
  .use(vuetify)
  .mount('#app')
