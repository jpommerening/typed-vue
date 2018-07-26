import Vue from "vue";
import Talk from "./talk";
import Title from "./slides/title";
import Intro from "./slides/intro";
import Goals from "./slides/goals";
import Dart from "./slides/dart";
import FlowTypeScript from "./slides/flowtypescript";
import Demo from "./slides/demo";
import Review from "./slides/review";
import Recap from "./slides/recap";
import MoreTypes from "./slides/moretypes";
import Links from "./slides/links";

const Slides = [
  Title,
  Intro,
  Goals,
  Dart,
  FlowTypeScript,
  Demo,
  Review,
  Recap,
  MoreTypes,
  Links
];

new Vue({
  el: "#talk",
  render: h => h(Talk, {}, Slides.map(Slide => h(Slide)))
});
