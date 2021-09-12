<template>
  <h1>一个人的信息</h1>
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <h2>{{msg}} , {{school}}</h2>
  <button @click="test">测试触发Demo组件的hello事件</button>
</template>

<script>
import { reactive } from "vue";

export default {
  name: "Demo",
  props: ['msg', 'school'],
  emits: ['hello'],
  setup(props, context) {

    // setup中的this是undefined
    //   console.log('-----setup------', props, context)
    //   console.log('==== setup ====', context.attrs)  // 详单与Vue2中的$attr
    //   console.log('==== setup ====', context.emit)   // 触发自定义事件
      console.log('==== setup ====', context.slots)     // 插槽
    // 数据
    let person = reactive({
      name: "张三",
      age: 20,
    })

    function test(){
        console.log('emit hello event')
        context.emit('hello', 666)
    }

    return {
      person,
      test
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