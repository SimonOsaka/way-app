<template>
  <div class="category">
    <text class="category-text">{{title}}</text>
    <slot name="right"></slot>
    <slot></slot>
  </div>
</template>

<style scoped>
.category {
  margin-top: 20px;
  width: 750px;
  height: 68px;
  background-color: #f2f3f4;
  flex-direction: row;
}
.category-text {
  padding-top: 20px;
  padding-left: 24px;
  color: #000000;
  font-weight: 600;
  font-size: 28px;
  width: 375px;
}
</style>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  }
};
</script>