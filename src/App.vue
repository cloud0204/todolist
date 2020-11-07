<template>
  <div id="app">
    <h1>todolist</h1>
    <h2>可以新增移除</h2>
    <div id="nav">
      <router-link to="/all">全部</router-link>|
      <router-link to="/active">未完成</router-link>|
      <router-link to="/complete">已完成</router-link>
    </div>
    <todoinput />
    <div class="list">
      <todoitem v-for="index in todoIndex" :key="index" :index="index" />
    </div>
  </div>
</template>

<style lang='scss' src='./appstyle.scss'>
</style>

<script>
import todoinput from "@/components/todoinput/index.vue";
import todoitem from "@/components/todoitem/index.vue";
export default {
  components: {
    todoinput,
    todoitem
  },
  computed: {
    todoIndex() {
      return this.$store.getters["todoIndex"];
    },
  },
  mounted() {
    this.$store.dispatch("INIT_TODOS");
  },
};
</script>
