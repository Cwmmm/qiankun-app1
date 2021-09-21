//设置全局根路径
import "./public-path"

import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

import store from './store';
import globalRegister from './store/global-register'

import routesFunc from './router'

Vue.use(VueRouter)
Vue.config.productionTip = false;
let router = null;
let instance = null;
let routerBase = null

//挂载
function render(props = {}) {
  const { container, globalState = {}, routerBase = '' } = props;
  const router = routerInit(routerBase);
  globalRegister(store, globalState);
  instance = new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app');

}

//初始化路由
function routerInit(routerBase) {
  return new VueRouter({
    base: routerBase,
    mode: 'hash',
    routes: routesFunc(routerBase.substring(1)),
  });
}


//导出生命周期钩子
export async function bootstrap() {
}
//父应用调用
export async function mount(props) {
  render(props);
}
// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
  router = null;
}
