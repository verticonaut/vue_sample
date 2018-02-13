/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

console.log('Hello World from Webpacker')

import Vue   from 'vue/dist/vue.esm'
import axios from 'axios';

import SuiVue from 'semantic-ui-vue';
Vue.use(SuiVue);

import VueSelect from 'vue-select/dist/vue-select.js'
Vue.component('v-select', VueSelect)

import App from '../components/app.vue'

document.addEventListener('DOMContentLoaded', () => {
  document.body.appendChild(document.createElement('app'))
  const app = new Vue({
    el: 'app',
    template: '<App/>',
    components: { App }
  })

  console.log(app)
});
