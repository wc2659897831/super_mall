<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button
        class="check-button"
        :is-selected="getAllCartChecked"
        @click.native="allCheckBtnClick"
      ></check-button>
      <span>全选</span>
    </div>
    <div class="price">合计: {{ getAllCartSelectedPrice }}</div>
    <div class="calculate">去计算({{ getAllCartSelectedLength }})</div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton";

import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters([
      "getAllCartChecked",
      "getAllCartSelectedPrice",
      "getAllCartSelectedLength",
    ]),
  },
  components: {
    CheckButton,
  },
  methods: {
    allCheckBtnClick() {
      const state = !this.getAllCartChecked;
      for (const cart of this.$store.state.cartList) {
        cart.checked = state;
      }
    },
  },
};
</script>

<style scoped>
.bottom-bar {
  position: relative;
  display: flex;
  height: 40px;
  font-size: 14px;
  line-height: 40px;
  background-color: rgba(0, 0, 0, 0.05);
}
.check-content {
  height: 100%;
  display: flex;
  line-height: 16px;
  align-items: center;
}
.check-button {
  margin: 0 10px;
}
.price {
  margin-left: 15px;
}
.calculate {
  position: absolute;
  right: 0;
  padding: 0 20px;
  color: #fff;
  background-color: rgba(255, 24, 0, 0.5);
}
</style>