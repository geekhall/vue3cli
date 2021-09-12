<template>
  <div class="son">
    <h3>我是Son组件（孙）</h3>
    <Dialog/>
  </div>
</template>

<script>
import Dialog from "./Dialog";

export default {
  name: "Son",
  components: {
    Dialog,
  }
};
</script>

<style scoped>
.son {
  background-color: bisque;
  padding: 1rem;
}
</style>