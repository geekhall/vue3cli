<template>
  <h1>当前求和为：{{ sum }}</h1>
  <button @click="sum++">点我加一</button>
  <hr>
  <h2>当前点击鼠标的坐标为：X：{{point.x}}, Y：{{point.y}}</h2>
</template>

<script>
// import {ref ,reactive, onMounted,onBeforeUnmount} from 'vue'
import {ref} from 'vue'
import usePoint from '../hooks/usePoint'

export default {
  name: "Demo",
  setup() {
    // 数据
    let sum = ref(0);
    let point = usePoint()
    // 转移至 hooks/usePoint.js
    // let point = reactive({
    //   x:0,
    //   y:0
    // })

    // function savePoint(event){
    //   point.x = event.pageX
    //   point.y = event.pageY
    //   console.log(event.pageX, event.pageY)
    // }

    // onMounted(()=>{
    //   window.addEventListener('click', savePoint)
    // })
    // onBeforeUnmount(()=>{
    //   window.removeEventListener('click', savePoint)
    // })
    // 返回一个对象
    return {
      sum,
      point
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