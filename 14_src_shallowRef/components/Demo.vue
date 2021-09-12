<template>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h2>薪资：{{job.j1.salary}}K</h2>
  <h2>x.a: {{x.a}}</h2>
  <h2>y.a: {{y.a}}</h2>
  <button @click="name+='~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="job.j1.salary++">点我加薪</button>
  <button @click="x.a++">点我x.a++</button>
  <button @click="y.a++">点我y.a++</button>
</template>

<script>
import { ref,toRefs, reactive, shallowRef} from "vue";

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
    // ref使用了reactive，生成了Proxy实现了响应式
    let y = ref({
      a:3
    })
    // shallowRef可以处理基本类型的响应式，但是不去处理对象类型的响应式（不是Proxy而是普通Object）
    let x = shallowRef({
      a:1
    })

    // 返回一个对象
    return {
      x,
      y,
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