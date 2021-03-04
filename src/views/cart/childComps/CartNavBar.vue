
<template>
  <nav-bar class="nav-bar">
    <div slot="center">购物车({{ getCartListLength }})</div>
  </nav-bar>
</template>

<script>
import NavBar from "components/content/navBar/NavBar";

export default {
  components: {
    NavBar,
  },
  computed: {
    getCartListLength() {
      return this.$store.state.cartList.length;
    },
  },
};
</script>

<style scoped>
.nav-bar {
  background-color: pink;
  color: #fff;
}
</style>