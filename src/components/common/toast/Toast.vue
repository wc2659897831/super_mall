<template>
  <div class="toast" v-show="isShow">{{ message }}</div>
</template>

<script>
export default {
  name: "toast",
  data() {
    return {
      isShow: false,
      message: "",
    };
  },
  methods: {
    showMessage(message = "默认文字", delay = 1500) {
      this.isShow = true;
      this.message = message;
      setTimeout(() => {
        this.isShow = false;
        this.message = "";
      }, delay);
    },
  },
};
</script>

<style scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  padding: 7px 10px;
  border-radius: 5px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.6);
  transform: translate(-50%);
}
</style>