import Vue from 'vue'
import App from './App.vue'
import Announcement from './Announcement.vue';
import Article from './Article.vue';

export const eventBus = new Vue();

Vue.component('announcement', Announcement);
Vue.component('app-article', Article);

new Vue({
  el: '#app',
  render: h => h(App)
})
