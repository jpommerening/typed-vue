import Vue from "vue";
import App from "./App.vue";
var message = "Bienvenue Vue!";
// tslint:disable-next-line:no-unused-expression
new Vue({
  el: "#app",
  render: function(h) {
    return h(App, { props: { message: message } });
  }
});
