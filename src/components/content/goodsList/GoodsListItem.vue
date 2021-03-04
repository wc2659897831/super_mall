<template>
  <div class="good-item" @click="itemClick">
    <img :src="showImage" alt="" @load="imgLoad" />
    <dir class="good-info">
      <p class="good-title">{{ goodItem.title }}</p>
      <span class="price">￥{{ goodItem.price }}</span>
      <!-- <span class="collect">{{ goodItem.cfav }}</span> -->
    </dir>
  </div>
</template>

<script>
export default {
  props: {
    goodItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    showImage() {
      return this.goodItem.image || this.goodItem.show.img;
    },
  },
  methods: {
    imgLoad() {
      this.$bus.$emit("goodItemImgLoad");
    },
    itemClick() {
      this.$router.push({
        path: "/detail",
        query: {
          iid: this.goodItem.iid,
        },
      });
    },
  },
  created() {
    // console.log(this.goodItem);
  },
};
</script>

<style scoped>
.good-item {
  margin-top: 10px;
  width: 47%;
  border-radius: 5px;
  overflow: hidden;
  background-color: rgba(0,0,0,0.01);
}
.good-item img {
  width: 100%;
}
.good-info{
  padding: 0 5px 5px 5px;
}
.good-title {
  line-height: 30px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-all;
}
.price{
  font-size: 18px;
  color: rgba(246, 79, 89,0.7);
}
</style>