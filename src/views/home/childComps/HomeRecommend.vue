<template>
  <div class="home-recommend">
    <a
      class="recommend-item"
      v-for="(item, index) in recommends"
      :key="index"
      :src="item.link"
    >
      <img :src="item.image" alt="" />
      <dir class="recommend-item-text">{{ item.title }}</dir>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.home-recommend {
  display: flex;
}
.recommend-item {
  padding: 15px 0;
  flex: 1;
  display: block;
  text-align: center;
}
.recommend-item img{
  width: 60px;
  height: 60px;
}
.recommend-item-text{
  margin-top: 10px;
  font-size: 14px;
}
</style>