<template>
  <div class="container">
    <button @click="update" class="btn">点击更新userinfo</button>
    <p><label>getGlobalState获取到全局状态user:</label>{{ userInfo.name }}</p>
    <button @click="routerTo" class="btn">点击跳转about</button>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  computed: {
    ...mapState("global", ["userInfo"]),
  },
  methods: {
    ...mapActions("global", ["setGlobalState"]),
    update() {
      console.log(this.setGlobalState({ userInfo: { name: "app1Changed" }}));
    },
    routerTo() {
      //应该是正常路由跳转不应该带上父路由地址
      this.$router.push({ name: "about" });
    },
  },
  created() {
    console.log(this.$globalState);
  },
};
</script>
<style>
.container {
  width: 100%;
  height: 100%;
  background-color: #eee;
  padding: 40px 20px;
}
.btn {
  border: 1px solid #333;
}
</style>
