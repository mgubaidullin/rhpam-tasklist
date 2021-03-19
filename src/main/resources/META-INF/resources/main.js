import Vue from '/js/vue.esm.browser.min.js'
import { MainTemplate } from './templates/main-template.js'
import { TaskList } from './components/tasklist.js'

// Router
Vue.use(VueRouter);
const router = new VueRouter({
  routes: [
    { path: '/', redirect: "/tasklist" },
    { path: '/tasklist', component: TaskList, name: "TaskList" },
  ]
})

// Application
var client = new Vue({
  el: '#app',
  router,
  data: function () {
      return {
        server: 'http://localhost:8080',
        username: 'rhpamAdmin',
        password: 'redhatpam1!'
      }
    },
  template: MainTemplate,
  mounted: function () {
  }
})