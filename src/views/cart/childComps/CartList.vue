<template>
  <div class="CartList">
    <cart-list-item
      v-for="(item, index) in cartList"
      :key="index"
      :cartItem="item"
    ></cart-list-item>
  </div>
</template>

<script>
import CartListItem from "./CartListItem";
export default {
  components: {
    CartListItem,
  },
  props: {
    cartList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
</style>