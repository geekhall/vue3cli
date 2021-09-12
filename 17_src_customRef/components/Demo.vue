<template>
  <h2>当前求和为：{{sum}}</h2>
  <button @click="sum++">点我++</button>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h2>薪资：{{job.j1.salary}}K</h2>
  <h2>座驾信息：{{}}K</h2>
  <button @click="name+='~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="job.j1.salary++">点我加薪</button>
  <button @click="showPerson">输出Person</button>
  <button @click="showRawPerson">输出最原始的Person</button>
</template>

<script>
import { toRefs, reactive, ref, toRaw} from "vue";

export default {
  name: "Demo",
  setup() {
    // 数据
    let sum = ref(0)
    let person = reactive({
      name: '张三',
      age: 20,
      job:{
        j1:{
          salary:30
        }
      }
    })
    function showPerson(){
      console.log(person) // 输出一个Proxy
    }
    function showRawPerson(){
      const p = toRaw(person)
      console.log(p)      // 输出一个原始的Person对象
    }

    // 返回一个对象
    return {
      sum,
      ...toRefs(person),
      showPerson,
      showRawPerson,

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