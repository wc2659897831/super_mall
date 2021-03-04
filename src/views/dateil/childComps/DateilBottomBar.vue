<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon select"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="cartClick">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    cartClick(){
      this.$emit('addToCart')
    }
  }
};
</script>

<style scoped>
.bottom-bar {
  position: relative;
  bottom: 0;
  display: flex;
  width: 100%;
  height: 49px;
  background-color: #fff;
  text-align: center;
}
.bottom-bar .bar-item {
  flex: 1;
}
.bar-left,
.bar-right {
  display: flex;
}
.bar-left > div,
.bar-right > div {
  flex: 1;
}
.bar-left > div {
  padding-top: 5px;
}
.icon {
  margin: 0 auto;
  display: block;
  width: 22px;
  height: 22px;
  background-image: url("~assets/img/detail/detail_bottom.png");
  background-size: 100%;
}
.text {
  font-size: 13px;
}
.icon.service {
  background-position-y: -52px;
}
.icon.shop {
  background-position-y: -99px;
}
.bar-right {
  line-height: 49px;
  font-size: 14px;
}
.cart {
  background-color: rgba(255, 222, 16, 1);
}
.buy {
  background-color: rgba(255, 119, 155, 1);
  color: #fff;
}
</style>