import Vue from "vue";
import Talk from "./talk";
import Slide01 from "./slides/01";

const Slides = [Slide01];

new Vue({
  el: "#talk",
  render: h => h(Talk, {}, Slides.map(Slide => h(Slide)))
});
