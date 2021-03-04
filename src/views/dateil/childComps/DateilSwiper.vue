<template>
  <van-swipe class="swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item
      class="swiper-item"
      v-for="(item, index) in topImages"
      :key="index"
    >
      <img :src="item" alt="" @load="imgLoad" />
    </van-swipe-item>
  </van-swipe>
</template>

<script>
import Vue from "vue";
import { Loading, Swipe, SwipeItem } from "vant";

Vue.use(Swipe);
Vue.use(SwipeItem);
export default {
  data() {
    return {
      currentIndex: 0,
      imgsLength: 0,
    };
  },
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    imgLoad() {
      if(++this.currentIndex === this.imgsLength){
        this.$emit('swiperImgLoad')
      }
    },
  },
  watch: {
    topImages() {
      this.imgsLength = this.topImages.length;
    },
  },
};
</script>

<style scoped>
.swiper-item {
  height: 300px;
  overflow: hidden;
}
.swiper-item img {
  width: 100%;
}
</style>