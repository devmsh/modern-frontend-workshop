import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';

Vue.use(BootstrapVue);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


let app = new Vue({
  el: '#app',
  data: {
    number1: 0,
    number2: 0,
    // message: 'Hello Vue!',
    // name: '',
  },
  computed: {
    total() {
      return this.number1 + this.number2;
    },
    // feedback() {
    //   return this.name.length ? '' : 'Please enter something';
    // },
    // state() {
    //   return this.name.length ? 'success' : 'warning';
    // },
  },
});