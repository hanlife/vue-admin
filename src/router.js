import Vue from "vue";
import Router from "vue-router";
import route from "./route/route"

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: route
});
