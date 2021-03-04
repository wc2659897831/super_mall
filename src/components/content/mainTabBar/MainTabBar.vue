<template>
  <div class="main-tab-bar">
    <tab-bar class="tab-bar">
      <tab-bar-item pathname="/home">
        <img slot="item-icon" src="~assets/img/tabbar/home.png" alt="" />
        <img
          slot="item-icon-active"
          src="~assets/img/tabbar/home_active.png"
          alt=""
        />
        <div slot="item-text">主页</div>
      </tab-bar-item>
      <tab-bar-item pathname="/cart">
        <img slot="item-icon" src="~assets/img/tabbar/cart.png" alt="" />
        <img
          slot="item-icon-active"
          src="~assets/img/tabbar/cart_active.png"
          alt=""
        />
        <div slot="item-text">购物车</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "components/common/tabBar/TabBar";
import TabBarItem from "components/common/tabBar/TabBarItem";
export default {
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style scoped>
</style>