<template>
  <div class="home">
    <home-nav-bar></home-nav-bar>
    <tab-control
      class="control1"
      :itemList="['流行', '新款', '精选']"
      @tabItemClick="tabItemClick"
      ref="control1"
      v-show="isShowTabControl"
    ></tab-control>
    <scroll
      class="scroll"
      ref="scroll"
      :probeType="3"
      :pullUpLoad="true"
      @scroll="scroll"
      @loadMore="loadMore"
    >
      <home-swiper
        :banners="banners"
        @bannerImgLoad="bannerImgLoad"
      ></home-swiper>
      <home-recommend :recommends="recommends"></home-recommend>
      <featrue-view></featrue-view>
      <tab-control
        :itemList="['流行', '新款', '精选']"
        @tabItemClick="tabItemClick"
        ref="control2"
      ></tab-control>
      <goods-list :goods="goods[currentType].list"></goods-list>
    </scroll>
    <back-top v-show="isShow" @click.native="backTopClick"></back-top>
  </div>
</template>

<script>
import HomeNavBar from "./childComps/HomeNavBar";
import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommend from "./childComps/HomeRecommend";
import FeatrueView from "./childComps/FeatrueView";

import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goodsList/GoodsList";
import Scroll from "components/content/scroll/Scroll";

import { getHomeMultidata, getHomeGoods } from "network/home";

import { backTopMixin, goodsItemImgLoadMixin } from "common/mixins";

export default {
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isShowTabControl: false,
      scrollTop: 0,
    };
  },
  mixins: [backTopMixin, goodsItemImgLoadMixin],
  components: {
    HomeNavBar,
    HomeSwiper,
    HomeRecommend,
    FeatrueView,
    TabControl,
    GoodsList,
    Scroll,
  },
  methods: {
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        const data = res.data;
        console.log(data);

        this.banners = data.banner.list; // 存储banner数据
        this.recommends = data.recommend.list; // 存储recommend数据
      });
    },

    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page++;

        this.$refs.scroll.finishPullUp();
      });
    },

    tabItemClick(index) {
      this.currentType = ["pop", "new", "sell"][index];
    },

    scroll(options) {
      const elY = this.$refs.control2.$el.offsetTop;
      this.isShowTabControl = options.y < -elY;

      this.isShowComponent(options)
    },

    bannerImgLoad() {
      this.$refs.scroll.refresh();
    },
    loadMore() {
      this.getHomeGoods(this.currentType);
    },
    backTopClick() {
      this.scrollToTop();
    },
  },
  created() {
    // 获取multidata数据
    this.getHomeMultidata();

    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  activated() {
    this.$refs.scroll.scrollTo(0, this.scrollTop, 0);
    this.$refs.scroll.refresh();
  },
  deactivated() {
    this.scrollTop = this.$refs.scroll.getScrollY();
  },
};
</script>

<style scoped>
.home {
  height: 100vh;
}
.scroll {
  height: calc(100% - 44px - 49px);
  overflow: hidden;
}
.control1 {
  position: fixed;
  width: 100%;
  background-color: #fff;
  z-index: 1;
}
</style>