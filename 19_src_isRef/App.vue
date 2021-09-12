<template>
  <div class="app">
    <h3>我是App组件（爷爷）</h3>
  </div>
</template>

<script>
import { ref, isProxy, isReactive, isRef, reactive, readonly, toRefs } from '@vue/reactivity'

export default {
  name: 'App',
  setup(){
    let car = reactive({
      name: 'Benz',
      price: '40W'
    })
    let sum = ref(0)
    let car2 = readonly(car)

    console.log(isRef(sum))       // true
    console.log(isReactive(car))  // true
    console.log(isReactive(car2)) // true
    console.log(isProxy(car))     // true
    console.log(isProxy(car2))    // true
    console.log(isProxy(sum))     // true
     
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