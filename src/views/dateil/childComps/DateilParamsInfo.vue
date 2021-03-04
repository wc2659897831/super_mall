<template>
  <div class="param-info" v-if="Object.keys(paramInfo).length !== 0">
    <table
      class="info-size"
      v-for="(table, index) in paramInfo.sizes"
      :key="index"
    >
      <tr v-for="(tr, index) in table" :key="index">
        <td v-for="(td, index) in tr" :key="index">{{ td }}</td>
      </tr>
    </table>
    <table class="info-param">
      <tr v-for="(info, index) in paramInfo.infos" :key="index">
        <td class="info-param-key">{{ info.key }}</td>
        <td class="param-key">{{ info.value }}</td>
      </tr>
    </table>
    <div class="info-img" v-if="paramInfo.image.length - 1 !== 0">
      <img :src="paramInfo.image" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    paramInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.param-info {
  padding: 15px;
}
.info-size,
.info-param {
  width: 100%;
  border-collapse: collapse;
}
.info-size tr,
.info-param tr {
  height: 45px;
  line-height: 45px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.05);
}
.info-size tr:last-child,
.info-param tr:last-child {
  border: none;
}
.info-param td {
  padding: 5px 0;
}
.info-param .info-param-key {
  min-width: 100px;
}
.info-param .param-key {
  color: rgba(232, 146, 161, 1);
  line-height: 25px;
}
.info-img {
  width: 100%;
}
</style>