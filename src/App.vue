<template>
  <div id="app">
    <keep-alive exclude="Dateil">
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar v-show=" $route.path.indexOf('/detail') "></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from "components/content/mainTabBar/MainTabBar";
export default {
  name: "App",
  components: {
    MainTabBar,
  },
};
</script>

<style scoped>
@import url("~assets/css/base.css");
</style>