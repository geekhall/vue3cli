<template>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h2>薪资：{{job.j1.salary}}K</h2>
  <button @click="name+='~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="job.j1.salary++">点我加薪</button>
</template>

<script>
import {ref, reactive, watchEffect, toRef, toRefs} from "vue";

export default {
  name: "Demo",
  setup() {
    // 数据
    let person = reactive({
      name: '张三',
      age: 20,
      job:{
        j1:{
          salary:30
        }
      }
    })

    const name1 = person.name
    console.log('%%%' , name1)
    const name2 = toRef(person, 'name')
    console.log('####', name2)
    
    
    // 返回一个对象
    return {
      // 注意这里如果使用ref为复制一个新的引用，修改后并不会改变person中的原值。
      // name: toRef(person, 'name'),
      // age: toRef(person, 'age'),
      // salary: toRef(person.job.j1, 'salary')

      // 使用toRefs与toRef功能一致，但可以批量创建多个ref对象，
      // 但只会展开对象的一层，比如salary就还是必须要写成job.j1.salary
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