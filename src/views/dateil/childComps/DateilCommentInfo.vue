<template>
  <div class="comment-info" v-if="Object.keys(commentInfo).length !== 0">
    <div class="info-header clear-fix">
      <div class="header-title">用户评论</div>
      <div class="header-more">更多</div>
    </div>
    <div class="info-user">
      <img :src="commentInfo.user.avatar" alt="" />
      <span>{{ commentInfo.user.uname }}</span>
    </div>
    <div class="info-detail">
      <p>{{ commentInfo.content }}</p>
      <div class="info-other">
        <span class="date">{{ commentInfo.created | showDate }}</span>
        <span>{{ commentInfo.style }}</span>
      </div>
    </div>
    <div class="info-imgs">
      <img
        :src="item"
        v-for="(item, index) in commentInfo.images"
        :key="index"
        alt=""
      />
    </div>
  </div>
</template>
<script>
import { formateDate } from "common/utils";

export default {
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  filters: {
    showDate(value) {
      const date = new Date(value * 1000);
      return formateDate(date, "yyyy-MM-dd hh:mm:ss");
    },
  },
};
</script>

<style scoped>
.comment-info {
  padding: 10px;
}
.info-header {
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.info-header .header-title {
  float: left;
}
.info-header .header-more {
  float: right;
}
.info-user {
  margin: 10px 0;
}
.info-user img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  vertical-align: middle;
}
.info-user span {
  margin-left: 10px;
  line-height: 40px;
}
.info-detail p {
  line-height: 23px;
  font-size: 14px;
}
.info-other {
  margin: 10px 0;
  color: rgba(0, 0, 0, 0.4);
}
.info-other span {
  margin-left: 10px;
}
.info-other span:first-child {
  margin: 0;
}
.info-imgs img {
  width: 150px;
}
</style>