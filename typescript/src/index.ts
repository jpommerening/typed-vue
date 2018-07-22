import Vue from "vue";
import App from "./app.vue";

const message: String = "Bienvenue Vue!";

new Vue({
  el: "#app",
  render: h => h(App, { props: { message } })
});
