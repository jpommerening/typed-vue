import Vue from "vue";
import Talk from "./talk";
import Slide01 from "./slides/01";
import Slide02 from "./slides/02";
import Slide03 from "./slides/03";

const Slides = [Slide01, Slide02, Slide03];

new Vue({
  el: "#talk",
  render: h => h(Talk, {}, Slides.map(Slide => h(Slide)))
});
