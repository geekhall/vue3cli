<template>
  <h2>我是Test组件</h2>
  <h2>鼠标位置：x:{{point.x}}, y: {{point.y}}</h2>
</template>

<script>
import usePoint from "../hooks/usePoint";
import { ref } from "vue";

export default {
  name: "Test",
  
  setup() {
    let name = ref("tom");
    const point = usePoint();

    return {name, point};
  },
};
</script>

<style>
</style>