<template>
  <div class="container">
    <button @click="update" class="btn">点击更新userinfo</button>
    <p><label>getGlobalState获取到全局状态user:</label>{{ user }}</p>
    <button @click="routerTo" class="btn">点击跳转about</button>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState, mapActions } from 'vuex';
export default {
  computed: {
    ...mapState('global', {
      user: (state) => state.user, // 获取父应用的user信息
    }),
  },
  methods: {
    ...mapActions('global', ['setGlobalState']),
    update() {
      this.setGlobalState({ user: { name: '张三' } });
    },
    routerTo() {
      //应该是正常路由跳转不应该带上父路由地址
      this.$router.push('/about');
    },
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
