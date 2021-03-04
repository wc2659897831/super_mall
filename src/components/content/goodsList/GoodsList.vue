<template>
  <div class="good-list">
    <goods-list-item
      v-for="(item, index) in goods"
      :key="index"
      :goodItem="item"
    ></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";
export default {
  props: {
    goods: {
      type: Array,
      defulat() {
        return [];
      },
    },
  },
  components: {
    GoodsListItem,
  },
};
</script>

<style scoped>
.good-list {
  padding: 0 0.5%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>