<template>
  <div class="cart">
    <cart-nav-bar></cart-nav-bar>
    <scroll class="scroll" ref="scroll">
      <cart-list :cartList="getCartList"></cart-list>
    </scroll>
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
import Scroll from "components/content/scroll/Scroll";

import CartNavBar from "./childComps/CartNavBar";
import CartList from "./childComps/CartList";
import CartBottomBar from "./childComps/CartBottomBar";

export default {
  components: {
    Scroll,
    CartNavBar,
    CartList,
    CartBottomBar,
  },
  computed: {
    getCartList() {
      return this.$store.state.cartList;
    },
  },
  activated() {
    this.$refs.scroll.refresh();
  },
};
</script>

<style scoped>
.cart {
  height: 100vh;
}
.scroll {
  height: calc(100% - 44px - 49px - 40px);
  overflow: hidden;
}
</style>