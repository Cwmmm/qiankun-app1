<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      这里是app1
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  height: 100%;
  width: 100%;
  overflow: hidden;
}
</style>
