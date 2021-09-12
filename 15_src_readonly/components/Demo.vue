<template>
  <h2>当前求和为：{{sum}}</h2>
  <button @click="sum++">点我++</button>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h2>薪资：{{job.j1.salary}}K</h2>
  <button @click="name+='~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="job.j1.salary++">点我加薪</button>
</template>

<script>
import { toRefs, reactive, shallowRef, readonly, shallowReadonly} from "vue";

export default {
  name: "Demo",
  setup() {
    // 数据
    // let person = shallowReactive({   // 只考虑第一层数据的响应式
    let person = reactive({
      name: '张三',
      age: 20,
      job:{
        j1:{
          salary:30
        }
      }
    })
    let sum = shallowRef(0)
    sum = readonly(sum)
    person = shallowReadonly(person) // 只有对象的第一层变为readonly，salary还是可以改的

    // 返回一个对象
    return {
      sum,
      ...toRefs(person)
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