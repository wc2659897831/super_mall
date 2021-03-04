<template>
  <div class="check-button" :class="{ check: isSelected }">
    <img src="~assets/img/cart/tick.svg" alt="" />
  </div>
</template>

<script>
export default {
  props:{
    isSelected:{
      type:Boolean,
      default:false,
    }
  },
};
</script>


<style scoped >
.check-button {
  width: 16px;
  height: 16px;
}
.check-button {
  border: 1.5px solid rgba(0, 0, 0, 0.2);
  border-radius: 3px;
}
.check {
  border: 1.5px solid rgba(255, 192, 203, 1);
  background-color: rgba(255, 192, 203, 0.7);
}
</style>