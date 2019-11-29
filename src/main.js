import Vue from "vue";
import App from './App.vue'
import { store } from "./store/store";

// import './assets/scss/main.scss'

new Vue({
  el: '#app',
  store: store,
  render: h=> h(App)
})