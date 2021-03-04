<template>
  <div class="cart-item">
    <div class="item-selector">
      <check-button
        ref="checkBtn"
        :is-selected="checkBtnCehcked"
        @click.native="checkBtnClick"
      ></check-button>
    </div>
    <div class="item-img">
      <img :src="cartItem.image" alt="商品图片" />
    </div>
    <div class="item-info">
      <div class="item-title">{{ cartItem.title }}</div>
      <div class="item-desc">{{ cartItem.desc }}</div>
      <div class="info-bottom">
        <div class="item-price left">${{ cartItem.price }}</div>
        <div class="item-count right">x{{ cartItem.count }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton";
export default {
  data() {
    return {
    };
  },
  props: {
    cartItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  components: {
    CheckButton,
  },
  computed:{
    checkBtnCehcked(){
      return this.cartItem.checked
    }
  },
  methods: {
    checkBtnClick() {
      this.cartItem.checked = !this.checkBtnCehcked;
    },
  },
};
</script>

<style scoped>
.cart-item {
  padding: 10px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.cart-item > div {
  display: inline-block;
  vertical-align: top;
}

.cart-item .item-selector {
  width: 10%;
  height: 110px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}
.item-img {
  width: 25%;
  height: 110px;
  text-align: center;
}
.item-info {
  position: relative;
  padding: 0 10px;
  width: 65%;
  height: 110px;
  box-sizing: border-box;
}

.item-img img {
  width: 100%;
  max-width: 120px;
  height: 100%;
  border-radius: 7px;
  overflow: hidden;
}
.item-title,
.item-desc {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.item-desc {
  margin-top: 10px;
  font-size: 13px;
  color: rgba(0, 0, 0, 0.5);
}
.info-bottom {
  position: absolute;
  bottom: 0;
  width: calc(100% - 20px);
}
.info-bottom .right {
  text-align: right;
}
.item-price {
  color: rgba(255, 154, 107, 1);
}
</style>