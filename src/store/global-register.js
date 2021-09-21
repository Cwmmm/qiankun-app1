
function registerGlobalModule(store, globalState) {
  if (!store || !store.hasModule) {
    return;
  }
  // 获取初始化的state
  const initState = globalState?.initialState || {
    userInfo: {
      name: 'vueApp1'
    },
    leftMenu: []
  };
  console.log(initState)
  // 将父应用的数据存储到子应用中，命名空间固定为global
  if (!store.hasModule('global')) {
    const globalModule = {
      namespaced: true,
      state: initState,
      mutations: {
        setGlobalState(state, payload) {
          state = Object.assign(state, payload);
        },
        // 通知父应用
        emitGlobalState(state, payload) {
          let obj = {
            key: Object.keys(payload)[0],
            value: payload[Object.keys(payload)[0]]
          }
          globalState.emitStateChange && globalState.emitStateChange(obj);
        },
        initGlobalState(state, payload) {
          state = Object.assign(state, payload);
        },
      },
      actions: {
        // 子应用改变state并通知父应用
        setGlobalState({ commit }, payload) {
          commit('setGlobalState', payload);
          commit('emitGlobalState', payload);
        },
        // 初始化，只用于mount时同步父应用的数据
        initGlobalState({ commit }, payload) {
          commit('initGlobalState', payload);
        },
      },
    };
    store.registerModule('global', globalModule);
  } else {
    // 每次mount时，都同步一次父应用数据
    store.dispatch('global/initGlobalState', initState);
  }
};

export default registerGlobalModule;