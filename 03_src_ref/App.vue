<template>
  <h1>我是APP组件</h1>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h3>工作种类：{{job.type}}</h3>
  <h3>工作薪水：{{job.salary}}</h3>
  <button @click="changeInfo">changeInfo</button>
</template>

<script>
import {ref} from 'vue'

export default {
  name: 'App',
  setup(){
    // data
    let name = ref('张三')
    let age = ref(18)
    let job = ref({
      type: '全栈工程师',
      salary: '30K'
    })

    function changeInfo(){
      name.value= '李四'
      age.value = 48
      job.value.type ='python工程师'
      job.value.salary = '35K'
      console.log(name.value, age.value)
    }

    // 返回
    return {
      name,
      age,
      job,
      changeInfo
    }
  }
}
</script>
