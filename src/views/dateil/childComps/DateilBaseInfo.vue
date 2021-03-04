<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <div class="info-title">{{ goods.title }}</div>
    <div class="info-price">
      <span class="n-price">{{ goods.nwePrice }}</span>
      <del class="o-price">{{ goods.oldPrice }}</del>
      <span class="discount" v-if="goods.discount">{{ goods.discount }}</span>
    </div>
    <div class="info-other">
      <span>{{ goods.columns[0] }}</span>
      <span>{{ goods.columns[1] }}</span>
      <span>{{ goods.services[goods.services.length - 1].name }}</span>
    </div>
    <div class="info-service">
      <span
        class="info-service-item"
        v-for="index in goods.services.length - 1"
        :key="index"
        v-if="goods.services[index - 1].icon"
      >
        <img :src="goods.services[index - 1].icon" alt="" />
        <span>{{ goods.services[index - 1].name }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    goods:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}
</script>

</script>

<style scoped>
.base-info {
  padding: 10px;
}
.info-title {
  margin-top: 10px;
  font-size: 17px;
  font-weight: 550;
}
.info-price {
  margin-top: 10px;
}
.info-price .n-price {
  font-size: 25px;
  color: rgba(255, 105, 127, 1);
}
.info-price .o-price {
  margin-left: 10px;
  color: rgba(0, 0, 0, 0.3);
}
.info-price .discount {
  display: inline-block;
  margin-left: 10px;
  padding: 3px 8px;
  color: #fff;
  font-size: 15px;
  border-radius: 20px;
  background-color: rgba(255, 105, 127, 1);
}
.info-other,
.info-service {
  margin-top: 20px;
  padding-bottom: 10px;
  display: flex;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.5);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.info-other > span,
.info-service > span {
  flex: 1;
  text-align: center;
}
.info-other > span:nth-child(1),
.info-service > span:nth-child(1) {
  text-align: left;
}
.info-other > span:nth-child(3),
.info-service > span:nth-child(3) {
  text-align: right;
}
.info-service {
  font-size: 12px;
  border-bottom: none;
}
.info-service img {
  margin-right: 3px;
  width: 12px;
  vertical-align: top;
}
</style>