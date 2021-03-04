
import { debounce } from "common/utils";

import BackTop from "components/common/backTop/BackTop";

export const backTopMixin = {
  data() {
    return {
      isShow: false
    }
  },
  components: {
    BackTop
  },
  methods: {
    scrollToTop() {
      this.$refs.scroll.scrollTo(0, 0, 300)
    },
    isShowComponent(options) {
      this.isShow = options.y < -1000;
    }
  }
}

export const goodsItemImgLoadMixin = {
  data() {
    return {
      refresh: null,
    }
  },
  mounted() {
    this.refresh = debounce(this.$refs.scroll.refresh, 300)
    const getScrollYs = debounce(this.getScrollYs,300)
    this.$bus.$on('goodItemImgLoad', () => {
      this.refresh()
      getScrollYs()
    })
  },
  deactivated() {
    this.$bus.$off('goodItemImgLoad', this.refresh);
  }
}