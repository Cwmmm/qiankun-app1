import './public-path';
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import store from './store';
import globalRegister from './store/global-register'
import Home from "./views/Home.vue";
import About from "./views/About.vue";

Vue.use(VueRouter)
Vue.config.productionTip = false;
let router = null;
let instance = null;
let routerBase = null

//挂载
function render(props = {}) {
  const { container } = props;
  routerBase = props.routerBase ? props.routerBase.substring(1) : ''
  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? props.routerBase : '#/',
    mode: 'hash',
    routes: [
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
    ],
  });
  //初始化基座项目左侧菜单
  store.dispatch('global/setGlobalState', {
    leftMenu: router.options.routes
  })
  //挂载dom
  instance = new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app');

}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

//提供给基座调用
export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}

export async function mount(props) {
  globalRegister(store, props)
  render(props);

}
export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
  router = null;
}