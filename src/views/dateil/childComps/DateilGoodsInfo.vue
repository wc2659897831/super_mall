<template>
  <div class="goods-info" v-if="Object.keys(detailInfo).length !== 0">
    <div class="info-desc clear-fix">
      <div class="start"></div>
      <div class="desc">{{ detailInfo.desc }}</div>
      <div class="end"></div>
    </div>
    <div class="info-key">{{ detailInfo.detailImage[0].key }}</div>
    <div class="info-list">
      <img
        v-for="(item, index) in detailInfo.detailImage[0].list"
        :key="index"
        :src="item"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    detailInfo: {
      type: Object,
      defualt() {
        return {};
      },
    },
  },
  methods: {
  },
};
</script>

<style scoped>
.goods-info {
  text-align: center;
}
.info-desc {
  padding: 10px;
}
.start,
.end {
  width: 20px;
  height: 20px;
}
.start {
  border-top: 1.5px solid rgba(0, 0, 0, 0.3);
  border-left: 1.5px solid rgba(0, 0, 0, 0.3);
}
.end {
  float: right;
  border-right: 1.5px solid rgba(0, 0, 0, 0.3);
  border-bottom: 1.5px solid rgba(0, 0, 0, 0.3);
}
.desc {
  padding: 0 15px;
  line-height: 30px;
  text-align: left;
  color: rgba(0, 0, 0, 0.6);
}
.info-key {
  position: relative;
  margin: 20px 0;
  display: inline-block;
  text-align: center;
}
.info-key::after,
.info-key::before {
  position: absolute;
  top: 50%;
  content: "";
  width: 50px;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.1);
  transform: translateY(-50%);
}
.info-key::after {
  left: 80px;
}
.info-key::before {
  left: -80px;
}
.info-list img {
  width: 100%;
}
</style>