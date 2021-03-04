<template>
  <nav-bar class="nav-bar">
    <div slot="left" class="left" @click="bcakClick">
      <img src="~assets/img/common/back.svg" alt="" />
    </div>
    <div slot="center" class="nav-bar-center">
      <div
        v-for="(item, index) in itemList"
        :key="index"
        :class="{ isActive: currentIndex === index }"
        @click="itemClick(index)"
      >
        {{ item }}
      </div>
    </div>
  </nav-bar>
</template>

<script>
import NavBar from "components/content/navBar/NavBar";

export default {
  data() {
    return {
      currentIndex: 0,
    };
  },
  props: {
    itemList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    NavBar,
  },
  methods: {
    bcakClick() {
      this.$router.back();
    },
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("navBarItemClick", this.currentIndex);
    },
  },
};
</script>

<style scoped>
.left img {
  margin-top: 10px;
}
.nav-bar-center {
  display: flex;
}
.nav-bar-center > div {
  flex: 1;
}
.isActive {
  color: pink;
}
</style>