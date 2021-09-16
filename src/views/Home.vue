<template>
  <div class="home">
    <button @click="update" class="btn">点击更新userinfo</button>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import { mapState, mapActions } from 'vuex';
export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
  computed: {
    ...mapState('global', {
      user: (state) => state.user, // 获取父应用的user信息
    }),
  },
  methods: {
    ...mapActions('global', ['setGlobalState']),
    update() {
      this.setGlobalState('user', { name: '张三' });
    },
  },
};
</script>
<style>
.btn {
  border: 1px solid #eee;
}
</style>
