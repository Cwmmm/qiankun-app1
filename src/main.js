import './public-path';
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
// import routes from './router';
import store from './store';
import globalRegister from './store/global-register'
import Home from "./views/Home.vue";
import About from "./views/About.vue";

Vue.use(VueRouter)
Vue.config.productionTip = false;
let router = null;
let instance = null;
let routerBase = null
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
        component: Home,
      },
      {
        path: routerBase + "/about",
        name: "about",
        component: About
      },
    ],
  });
  store.dispatch('global/setGlobalState', {
    leftMenu: {
      1: '1234',
      2: '423'
    }
  })
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