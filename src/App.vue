<template>
  <div class="app">
    <h3>我是App组件（爷爷）</h3>
    <Suspense>
      <template v-slot:default>
        <Child/>    
      </template>
      <template v-slot:fallback>
        <h3>加载中。。。稍等</h3>
      </template>
    </Suspense>
    
  </div>
</template>

<script>
// import Child from './components/Child'   // 静态引用
import {defineAsyncComponent} from 'vue'
const Child = defineAsyncComponent(()=>import('./components/Child')) // 异步引入
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