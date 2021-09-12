<template>
  <div class="app">
    <h3>我是App组件（爷爷）, {{name}} - {{price}}</h3>
    <Child/>
  </div>
</template>

<script>
import { reactive, toRefs } from '@vue/reactivity'
import Child from './components/Child'
import { provide } from '@vue/runtime-core'

export default {
  name: 'App',
  components: {Child},
  setup(){
    let car = reactive({
      name: 'Benz',
      price: '40W'
    })

    provide('car', car) // 给自己的后代组件传递数据
    return {...toRefs(car)}
  }
}
</script>

<style>
  .app {
    background-color: grey;
    padding: 2rem;  
  }
</style>