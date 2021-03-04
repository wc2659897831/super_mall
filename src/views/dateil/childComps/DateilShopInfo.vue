<template>
  <div class="shop-info">
    <div class="shop-top">
      <img :src="shop.logo" alt="" />
      <span class="title">{{ shop.name }}</span>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-item shop-middle-left">
        <div class="info-sells">
          <div class="info-count">
            {{ shop.sells | sellCountFilter }}
          </div>
          <div class="sells-text">总销量</div>
        </div>
        <div class="info-goods">
          <div class="goods-count">
            {{ shop.goodsCount }}
          </div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>
      <div class="shop-middle-item shop-middle-right">
        <table>
          <tr v-for="(item, index) in shop.score" :key="index">
            <td>{{ item.name }}</td>
            <td class="score" :class="{ 'score-better': item.isBetter }">
              {{ item.score }}
            </td>
            <td class="better" :class="{ 'better-more': item.isBetter }">
              {{ item.isBetter ? "低" : "高" }}
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  filters: {
    sellCountFilter(value) {
      return value > 10000 ? `${(value / 10000).toFixed(2)}万` : value;
    },
  },
};
</script>

<style scoped>
.shop-info {
  padding: 10px;
  border-top: 5px solid rgba(0, 0, 0, 0.05);
}
.shop-top {
  line-height: 40px;
}
.shop-top img {
  border-radius: 50%;
  width: 40px;
  height: 40px;
  border: 1.5px solid rgba(0, 0, 0, 0.2);
  overflow: hidden;
  vertical-align: middle;
}
.shop-top .title {
  margin-left: 10px;
}
.shop-middle {
  display: flex;
  flex-wrap: wrap;
  height: 130px;
}
.shop-middle-item {
  width: 50%;
}
.shop-bottom {
  display: block;
}
.shop-middle-left,
.shop-middle-right {
  display: flex;
  align-items: center;
}
.shop-middle-left {
  position: relative;
}
.shop-middle-left::before {
  position: absolute;
  top: 50%;
  right: -1px;
  content: "";
  width: 2px;
  height: 45%;
  background-color: rgba(0, 0, 0, 0.05);
  transform: translateY(-50%);
}
.info-sells,
.info-goods {
  width: 50%;
  text-align: center;
  font-size: 13px;
}
.info-count,
.goods-count {
  line-height: 25px;
}
.shop-middle-right table {
  margin: 0 auto;
  font-size: 13px;
  /* width: auto; */
  /* height: 90%; */
}
/* 利用td边框实现每个td的间距 */
.shop-middle-right table td {
  border: 3px solid transparent;
}

.score {
  color: rgba(106, 152, 66, 1);
}
.score-better {
  color: rgba(230, 88, 83, 1);
}
.shop-middle-right table .better,
.shop-middle-right table .better-more {
  text-align: center;
  color: #fff;
  /* 这里把颜色设置成了白色是因为 把背景色给遮住 */
  border-color: #fff;
}
.better {
  background-color: rgba(106, 152, 66, 1);
}
.better-more {
  background-color: rgba(230, 88, 83, 1);
}
.shop-bottom {
  margin: 10px 0;
  text-align: center;
}
.shop-bottom .enter-shop {
  display: inline-block;
  padding: 7px 40px;
  border-radius: 20px;
  font-size: 13px;
  background-color: rgba(0, 0, 0, 0.04);
}
</style>