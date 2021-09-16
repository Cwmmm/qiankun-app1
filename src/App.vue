<template>
  <div id="app">
    <div id="nav">vue-app1 子应用</div>
    <router-view />
  </div>
</template>
<script>
// import { mapActions } from 'vuex';
export default {
  methods: {
    // ...mapActions('global', ['setGlobalState']),
  },
  // created() {
  //   this.setGlobalState('leftMenu', ['1', '2']);
  // },
};
</script>
<style>
#app {
  height: 100%;
  width: 100%;
  overflow: hidden;
}
</style>
