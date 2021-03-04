<template>
  <div class="tab-control">
    <div
      class="item"
      v-for="(item, index) in itemList"
      :key="index"
      :class="{ isActive: index === currentIndex }"
      @click="itemClick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
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
  computed:{
    isActive(){
      return true
    }
  },
  methods:{
    itemClick(index){
      this.currentIndex = index
      this.$emit('tabItemClick',index)
    }
  }
};
</script>

<style scoped>
.tab-control {
  display: flex;
  height: 40px;
  line-height: 40px;
}
.tab-control > div {
  flex: 1;
  text-align: center;
}
.tab-control .isActive span{
  padding-bottom: 5px;
  border-bottom: 2px solid pink;
}
</style>