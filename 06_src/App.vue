<template>
  <h1>我是APP组件</h1>
  <h2>姓名：{{ person.name }}</h2>
  <h2 v-show="person.sex">性别：{{ person.sex }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <h3>工作种类：{{ person.job.type }}</h3>
  <h3>工作薪水：{{ person.job.salary }}</h3>
  <h3>测试数据C：{{ person.job.a.b.c }}</h3>
  <h3>爱好：{{ person.hobby }}</h3>
  <button @click="changePerson">changePerson</button>
  <button @click="addSex">添加一个sex属性</button>
  <button @click="deleteName">删除一个name属性</button>
</template>

<script>
import { reactive } from "vue";

export default {
  name: "App",
  setup() {
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        type: "全栈工程师",
        salary: "30K",
        a: {
          b: {
            c: 666,
          },
        },
      },
      hobby: ["抽烟", "喝酒", "烫头"]
    });

    function changePerson(){
      person.name = '王老五'
      person.age = 30
      person.job.type = 'python工程师'
      person.job.salary = '38K'
      person.job.a.b.c = 888
      person.hobby[2] = "打游戏"
    }
    function addSex(){
      person.sex = '男'
    }
    function deleteName(){
      console.log('deleteName')
    }
    // 返回
    return {
      person,
      changePerson,
      addSex,
      deleteName
    };
  },
};
</script>
