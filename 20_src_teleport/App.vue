<template>
  <div class="app">
    <h3>我是App组件（爷爷）</h3>
    <Child/>
  </div>
</template>

<script>
import Child from './components/Child'

export default {
  name: 'App',
  components: {Child},
}
</script>

<style>
  .app {
    background-color: grey;
    padding: 2rem;  
  }
</style>