import { TaskListTemplate } from "../templates/tasklist-template.js";
import Vue from '/js/vue.esm.browser.min.js'

const TaskList = Vue.component('TaskList', {
  data: function () {
    return {
      rows: [],
      showSpinner: false,
      file: null
    }
  },
  mounted: function () {
  },
  methods: {
    refresh: function (event) {
      this.showSpinner = true;
      const token = this.$root.username + ':' + this.$root.password;
      const headers = {
        'Authorization': 'Basic '+ window.btoa(token),
        'Accept': 'application/json'
        };

      axios.get(this.$root.server + '/kie-server/services/rest/server/queries/tasks/instances', {headers})
      .then(response => {
        this.rows = response.data['task-summary'].map(obj => {
            const x = obj;
            x['task-created-on'] = new Date(obj['task-created-on']['java.util.Date']).toLocaleDateString("en-US");
            return x;
            });
        console.log(this.rows);
        this.showSpinner = false;
      }).catch(error => {
         this.showSpinner = false;
         console.log(error);
       });
    },
  },
  template: TaskListTemplate
})

export { TaskList }