<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.tab-bar {
  position: fixed;
  display: flex;
  bottom: 0;
  width: 100%;
  height: 49px;
  box-shadow: 0px 0px 5px rgba(0,0,0,0.2);
  background-color: #fff
}
</style>