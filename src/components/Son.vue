<template>
  <div class="son">
      <h3>我是Son组件（孙）</h3>
      <hr>
      <h3>{{car.name}} --- {{car.price}}</h3>
  </div>
</template>

<script>
import { inject } from '@vue/runtime-core'
export default {
    name: 'Son',
    setup(){
      let car = inject('car')
      console.log(car)

      return {car}
    }
}
</script>

<style scoped>
    .son {
        background-color: bisque;
        padding: 1rem;
    }
</style>