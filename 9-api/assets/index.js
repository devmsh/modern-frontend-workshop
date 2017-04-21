import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import axios from 'axios';

Vue.use(BootstrapVue);

let app = new Vue({
  el: '#app',
  data: {
    tasks: []
  },
  created: function () {
    axios.get('tasks.json').then(res => {
      this.tasks = res.data;
      this.$emit('tasks created');
    });

  },
  methods: {
    submit: function () {
      console.log(JSON.stringify(this.tasks));
      this.$emit('tasks submited',this.tasks);
    }
  }
});

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'