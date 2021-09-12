<template>
  <h1>我是APP组件</h1>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h3>工作种类：{{ job.type }}</h3>
  <h3>工作薪水：{{ job.salary }}</h3>
  <h3>测试数据C：{{ job.a.b.c }}</h3>
  <h3>爱好：{{ hobby }}</h3>
  <h3>爱好1：{{ hobby1 }}</h3>
  <button @click="changeInfo">changeInfo</button>
  <hr>
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <h3>工作种类：{{ person.job.type }}</h3>
  <h3>工作薪水：{{ person.job.salary }}</h3>
  <h3>测试数据C：{{ person.job.a.b.c }}</h3>
  <h3>爱好：{{ person.hobby }}</h3>
  <button @click="changePerson">changePerson</button>
</template>

<script>
import { ref, reactive } from "vue";

export default {
  name: "App",
  setup() {
    // data
    let name = ref("张三");
    let age = ref(18);
    let job = reactive({
      type: "全栈工程师",
      salary: "30K",
      a: {
        b: {
          c: 666,
        },
      },
    });
    let hobby = ["抽烟", "喝酒", "烫头"];
    let hobby1 = reactive(["抽烟", "喝酒", "烫头"]);

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

    function changeInfo() {
      name.value = "李四";
      age.value = 48;
      job.type = "python工程师";
      job.salary = "35K";
      job.a.b.c = 999;
      hobby[0] = "学习";
      hobby1[0] = "听歌";
      hobby1.unshift("看电影");
      console.log(job);
    }

    function changePerson(){
      person.name = '王老五'
      person.age = 30
      person.job.type = 'python工程师'
      person.job.salary = '38K'
      person.job.a.b.c = 888
      person.hobby[2] = "打游戏"
    }

    // 返回
    return {
      name,
      age,
      job,
      hobby,
      hobby1,
      person,
      changeInfo,
      changePerson
    };
  },
};
</script>
