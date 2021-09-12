<template>
  <h1>当前求和为：{{sum}}</h1>
  <button @click="sum++">点我加一</button>
  <hr>
  <h1>persons: {{person.age}}</h1>
  <button @click="person.age++">点我年龄加一</button>
  <hr>
  <h1>薪水: {{person.job.j1.salary}}</h1>
  <button @click="person.job.j1.salary++">点我加薪</button>
</template>

<script>
import {ref, reactive, watchEffect} from "vue";

export default {
  name: "Demo",
  setup() {
    // 数据
    let sum = ref(0)
    let msg = ref('Hello Geekhall')
    let person = reactive({
      name: '张三',
      age: 20,
      job:{
        j1:{
          salary:20
        }
      }
    })
    // console.log(sum)
    // console.log(msg)
    // console.log(person)
    // watch(sum, (newValue, oldValue) =>{
    //   console.log('sum的值变化了', newValue, oldValue)
    // })

    // RefImpl 需要开启deep:true才能见识到对象内部的变化
    // 否则age++时这里抓不到
    // watch(person, (newValue, oldValue) =>{
    //   console.log('sum的值变化了', newValue, oldValue)
    // },{deep:true})

    // person.value是一个reactive生成的Proxy对象，默认开启了deep
    // watch(person.value, (newValue, oldValue) =>{
    //   console.log('sum的值变化了', newValue, oldValue)
    // })
    
    // 使用到的才监视
    watchEffect(()=>{
      const x1 = sum.value
      const x2 = person.job.j1.salary
      console.log(x1, x2)
      
      console.log('watchEffect所指定的回调执行了。')
    })

    
    

    // 返回一个对象
    return {
      sum,
      msg,
      person
    }
  },
};
</script>

<style>
.demo {
  background-color: orange;
  padding: 10px;
}
</style>