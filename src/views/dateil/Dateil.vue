<template>
  <div class="dateil">
    <dateil-nav-bar
      :itemList="['商品', '参数', '评论', '推荐']"
      @navBarItemClick="navBarItemClick"
      ref="nav"
    ></dateil-nav-bar>
    <scroll class="scroll" ref="scroll" :probeType="3" @scroll="scroll">
      <dateil-swiper
        :topImages="topImages"
        @swiperImgLoad="swiperImgLoad"
      ></dateil-swiper>
      <dateil-base-info :goods="goods"></dateil-base-info>
      <dateil-shop-info :shop="shop"></dateil-shop-info>
      <dateil-goods-info :detailInfo="dateilInfo"></dateil-goods-info>
      <dateil-params-info
        :paramInfo="paramInfo"
        ref="params"
      ></dateil-params-info>
      <dateil-comment-info
        :commentInfo="commentInfo"
        ref="comment"
      ></dateil-comment-info>
      <goods-list :goods="recommend" ref="recommend"></goods-list>
    </scroll>
    <back-top v-show="isShow" @click.native="scrollToTop"></back-top>
    <dateil-bottom-bar @addToCart="addToCart"></dateil-bottom-bar>
  </div>
</template>

<script>
import { NAV_BAR_HEIGHT } from "common/consts";
import { debounce } from "common/utils";
import { goodsItemImgLoadMixin, backTopMixin } from "common/mixins";

import Scroll from "components/content/scroll/Scroll";

import DateilNavBar from "./childComps/DateilNavBar";
import DateilSwiper from "./childComps/DateilSwiper";
import DateilBaseInfo from "./childComps/DateilBaseInfo";
import DateilShopInfo from "./childComps/DateilShopInfo";
import DateilGoodsInfo from "./childComps/DateilGoodsInfo";
import DateilParamsInfo from "./childComps/DateilParamsInfo";
import DateilCommentInfo from "./childComps/DateilCommentInfo";
import DateilBottomBar from "./childComps/DateilBottomBar";

import GoodsList from "components/content/goodsList/GoodsList";

import { mapActions } from "vuex";

import {
  getDetail,
  getRecommend,
  Goods,
  Shop,
  GoodsParam,
} from "network/dateil";

export default {
  name: "Dateil",
  mixins: [goodsItemImgLoadMixin, backTopMixin],
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      dateilInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommend: [],
      scrollYs: [],
      getScrollYs: null,
      currentNavBarItemIndex: 0,
    };
  },
  components: {
    Scroll,
    DateilNavBar,
    DateilSwiper,
    DateilBaseInfo,
    DateilShopInfo,
    DateilGoodsInfo,
    DateilParamsInfo,
    DateilCommentInfo,
    DateilBottomBar,
    GoodsList,
  },
  methods: {
    ...mapActions(["addCart"]),
    getDetail(iid) {
      getDetail(iid).then((res) => {
        const data = res.result;
        console.log(data);

        // 获取轮播图数据
        this.topImages = data.itemInfo.topImages;
        // 获取商品信息
        this.goods = new Goods(
          data.itemInfo,
          data.columns,
          data.shopInfo.services
        );
        // 获取商铺信息
        this.shop = new Shop(data.shopInfo);
        // 获取商品介绍信息
        this.dateilInfo = data.detailInfo;
        // 获取参数
        this.paramInfo = new GoodsParam(
          data.itemParams.info,
          data.itemParams.rule
        );
        // 获取评论
        if (data.rate.cRate !== 0) {
          this.commentInfo = data.rate.list[0];
        }
        // 获取推荐信息
        getRecommend().then((res) => {
          this.recommend = res.data.list;
        });
      });
    },
    swiperImgLoad() {
      this.$refs.scroll.refresh();
      this.getScrollYs();
    },
    navBarItemClick(index) {
      this.currentNavBarItemIndex = index;
      this.$refs.scroll.scrollTo(
        0,
        -this.scrollYs[index] + NAV_BAR_HEIGHT,
        300
      );
    },
    scroll(options) {
      this.isShowComponent(options);

      const optionsY = -options.y + NAV_BAR_HEIGHT;
      for (let i = 0; i < this.scrollYs.length - 1; i++) {
        if (
          this.currentNavBarItemIndex !== i &&
          optionsY > this.scrollYs[i] &&
          optionsY < this.scrollYs[i + 1]
        ) {
          this.currentNavBarItemIndex = this.$refs.nav.currentIndex = i;
        }
      }
    },
    addToCart() {
      const product = {
        image: this.topImages[0],
        title: this.goods.title,
        desc: this.goods.desc,
        price: this.goods.realPrice,
        iid: this.iid,
      };

      console.log(this.$toast);
      this.addCart(product).then((res) => {
        this.$toast.showMessage(res, 1500);
      });
    },
  },
  created() {
    this.iid = this.$route.query.iid;
    // 获取dateil数据
    this.getDetail(this.iid);

    // 实现一个防抖的 添加指定的组件的高度
    this.getScrollYs = debounce(() => {
      this.scrollYs = [];
      this.scrollYs.push(0);

      this.scrollYs.push(this.$refs.params.$el.offsetTop);
      this.scrollYs.push(this.$refs.comment.$el.offsetTop);
      this.scrollYs.push(this.$refs.recommend.$el.offsetTop);

      this.scrollYs.push(Number.MAX_VALUE);

    }, 300);
  },
  mounted() {},
};
</script>

<style scoped>
.dateil {
  position: relative;
  height: 100vh;
}
.scroll {
  height: calc(100% - 44px - 49px);
  overflow: hidden;
}
</style>