import Vue from "nativescript-vue";
import RadListView from 'nativescript-ui-listview/vue';

Vue.registerElement(
    'CardView',
    () => require('nativescript-cardview').CardView
  );

Vue.use(RadListView);

import App from "./components/App";

new Vue({
    render: h => h(App)
}).$start();
