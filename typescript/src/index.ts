import Vue from "vue";
import App from "./app.vue";

const message: string = "Bienvenue Vue!";

// tslint:disable-next-line:no-unused-expression
new Vue({
  el: "#app",
  render: h => h(App, { props: { message } })
});
