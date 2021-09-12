<template>
  <div class="child">
      <h3>我是Child组件（子）</h3>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    name: 'Child',
    async setup(){
        let sum = ref(0)
        let p = new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve({sum})
            }, 3000)
        })

        return await p
    }
}
</script>

<style scoped>
    .child {
        background-color: aqua;
        padding: 1rem;
    }
</style>