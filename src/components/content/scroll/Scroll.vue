<template>
  <div class="wrapper" ref="warpper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";

BScroll.use(Pullup);

export default {
  data() {
    return {
      betterScroll: null,
    };
  },
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    refresh() {
      this.betterScroll && this.betterScroll.refresh();
    },
    finishPullUp() {
      this.betterScroll.finishPullUp();
    },
    scrollTo(x, y, time) {
      this.betterScroll.scrollTo(x, y, time);
    },
    getScrollY() {
      return this.betterScroll ? this.betterScroll.y : 0;
    },
  },
  mounted() {
    this.betterScroll = new BScroll(this.$refs.warpper, {
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      click: true,
    });

    // 滚动时的事件
    this.betterScroll.on("scroll", (options) => {
      this.$emit("scroll", options);
    });

    if (this.pullUpLoad) {
      this.betterScroll.on("pullingUp", () => {
        this.$emit("loadMore");
      });
    }
  },
};
</script>

<style scoped>
</style>