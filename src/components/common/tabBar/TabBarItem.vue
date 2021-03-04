<template>
  <div class="tab-bar-item" @click="itemClick">
    <div class="item-icon" v-if="isActive">
      <slot name="item-icon"></slot>
    </div>
    <div class="item-icon-active" v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div class="item-text" :class="{ isActive: !isActive }">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currrentIndex: 0,
    };
  },
  props: {
    pathname: {
      type: String,
      default: "",
    },
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.pathname);
    },
  },
  methods: {
    itemClick() {
      this.$router.push(this.pathname);
    },
  },
};
</script>

<style scoped>
.tab-bar-item {
  padding-top: 3px;
  flex: 1;
}
.tab-bar-item > div {
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}
.item-icon,
.item-icon-active {
  width: 25px;
  height: 25px;
}
.item-icon img,
.item-icon-active img {
  width: 100%;
}
.item-text {
  margin-top: 4px;
  font-size: 13px;
}
.isActive {
  color: rgba(221, 94, 78, 1);
}
</style>