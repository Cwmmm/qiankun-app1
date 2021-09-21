import Home from "../views/Home.vue";
import About from "../views/About.vue";

function routesFunc(routerBase = '') {
  return [
    {
      path: routerBase,
      name: 'home',
      meta: {
        title: '主页'
      },
      component: Home,
    },
    {
      path: routerBase + "/about",
      name: "about",
      meta: {
        title: '关于'
      },
      component: About
    },
  ];
}

export default routesFunc;
