<template>
  <nav-bar class="nav-bar">
    <div slot="center">首页</div>
  </nav-bar>
</template>

<script>
import NavBar from "components/content/navBar/NavBar";
export default {
  components: {
    NavBar,
  },
};
</script>

<style scoped>
.nav-bar {
  color: #fff;
  background-color: pink;
}
</style>