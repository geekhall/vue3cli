<template>
  <h1>我是APP组件</h1>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <button @click="sayHello">Vue3的说话</button><br>
  <button @click="sayWelcome">Vue2的欢迎</button><br>
  <button @click="test1">Test1</button><br>
  <button @click="test2">Test2</button><br>
</template>

<script>
// 引入渲染函数
// import { h } from '@vue/runtime-core'
// import { h } from 'vue'

export default {
  name: 'App',
  // Vue2的data、methods、computed在Vue3中还是可以使用的，但是不推荐
  // Vue2的方法中读取Vue3中的数据和方法没有问题
  // 但是Vue3的setup中读取不到Vue2的数据和方法
  data () {
    return {
      sex: '男'
    }
  },
  methods: {
    sayWelcome(){
      alert('欢迎')
    },
    test1(){
      console.log(this.sex)           // 男
      console.log(this.sayWelcome)    // f sayWelcome(){...}
      console.log(this.name)          // 张三
      console.log(this.age)           // 18
      console.log(this.sayHello)      // f sayHello(){...}
    }
  },
  // 此处只是暂时测试一下，暂时未考虑响应式的问题。
  setup(){
    // data
    let name = '张三'
    let age = 18

    // 方法
    function sayHello(){
      alert(`我叫${name}，我${age}岁了，你好！`)
    }

    function test2(){
      console.log(this.name)            // 张三
      console.log(this.age)             // 18
      console.log(this.sayHello)        // f sayHello(){...}
      console.log(this.sex)             // undefined 
      console.log(this.sayWelcome)      // undefined
    }

    // 返回
    return {
      name,
      age,
      sayHello,
      test2
    }

    // 渲染函数
    // return ()=>{
    //   return h('h1', 'Geekhall')
    // }
    // 渲染函数简写
    // return ()=>h('h1', 'Geekhall')
  }

}
</script>
