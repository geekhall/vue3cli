<template>
  <h1>当前求和为：{{ sum }}</h1>
  <button @click="sum++">点我加一</button>
</template>

<script>
import {ref} from 'vue'

export default {
  name: "Demo",
  setup() {
    // 数据
    let sum = ref(0);

    // 返回一个对象
    return {
      sum
    }
  }
}
</script>

<style>
.demo {
  background-color: orange;
  padding: 10px;
}
</style>