import Vue from "vue";
import Talk from "./talk";
import Title from "./slides/title";
import Intro from "./slides/intro";
import Slide03 from "./slides/03";
import Slide04 from "./slides/04";
import Dart from "./slides/dart";
import FlowTypeScript from "./slides/flowtypescript";
import Review from "./slides/review";
import MoreTypes from "./slides/moretypes";
import Links from "./slides/links";

const Slides = [
  Title,
  Intro,
  Slide03,
  Slide04,
  Dart,
  FlowTypeScript,
  Review,
  MoreTypes,
  Links
];

new Vue({
  el: "#talk",
  render: h => h(Talk, {}, Slides.map(Slide => h(Slide)))
});
