<template>
  <van-swipe class="swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item v-for="(item, index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" :alt="item.title" @load="bannerImgLoad" />
      </a>
    </van-swipe-item>
  </van-swipe>
</template>

<script>
import Vue from "vue";
import { Swipe, SwipeItem } from "vant";

Vue.use(Swipe);
Vue.use(SwipeItem);

export default {
  data() {
    return {
      isEmitImgLoadFlag: false,
    };
  },
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    bannerImgLoad() {
      if (!this.isEmitImgLoadFlag) {
        this.$emit("bannerImgLoad");
        this.isEmitImgLoadFlag = true;
      }
    },
  },
};
</script>

<style scoped>
.swipe .van-swipe-item {
  color: #fff;
  text-align: center;
}
.van-swipe-item img {
  width: 100%;
}
</style>