<template>
  <div class="child">
      <h3>我是Child组件（子）</h3>
      <Son/>
  </div>
</template>

<script>
import Son from './Son'

export default {
    name: 'Child',
    components: {Son}
}
</script>

<style scoped>
    .child {
        background-color: aqua;
        padding: 1rem;
    }
</style>