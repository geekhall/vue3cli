<template>
  <h1>当前求和为：{{sum}}</h1>
  <button @click="sum++">点我加一</button>
  <hr>
  <h2>当前信息为：{{msg}}</h2>
  <button @click="msg+='!'">修改信息</button>
  <hr>
  <h2>姓名：{{person.name}}</h2>
  <h2>年龄：{{person.age}}</h2>
  <h2>薪水：{{person.job.j1.salary}}</h2>
  <button @click="person.name+='~'">修改姓名</button>
  <button @click="person.age++">修改年龄</button>
  <button @click="person.job.j1.salary++">涨薪</button>
</template>

<script>
import {ref, watch, reactive} from "vue";

export default {
  name: "Demo",
  // watch: {
  //   // 简写方式
  //   sum(newValue, oldValue){
  //     console.log('sum的值变化了', newValue,oldValue)
  //   }
  //   // 完整写法
  //   sum: {
  //     immediate:true,
  //     deep:true,
  //     handler(newValue, oldValue){
  //       console.log('sum的值变化了', newValue,oldValue)
  //     }
  //   }
  // },
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

    // 情况一：监视ref所定义的响应式数据
    watch(sum, (newValue, oldValue)=>{
      console.log('sum的值变化了', newValue,oldValue)
    },{immediate:true, deep:true})
    // 情况二： 及那是ref所定义的多个响应式数据
    // 可以写两个watch
    // watch(sum, (newValue, oldValue)=>{
    //   console.log('sum的值变化了', newValue,oldValue)
    // })
    // watch(msg, (newValue, oldValue)=>{
    //   console.log('msg的值变化了', newValue,oldValue)
    // })

    // 也可以把监视对象放到一个数组中
    // watch([sum,msg], (newValue, oldValue)=>{
    //   console.log('msg的值变化了', newValue,oldValue)
    // })

    // 情况三： 监视reactive
    // 注意：此处无法获得正确的oldValue
    // 注意：强制开启了深度监视（deep:false)配置无效
    // watch(person, (newValue, oldValue)=>{
    //   console.log('person变化了', newValue, oldValue)
    // })

    // 情况四：监视reactive所定义的一个响应式数据中的某一个属性
    // watch(()=>person.age, (newValue, oldValue)=>{
    //   console.log('person的age变化了', newValue, oldValue)
    // })

    // 情况五：监视reactive所定义的一个响应式数据中的某一些属性
    watch([()=>person.age, ()=>person.name], (newValue, oldValue)=>{
      console.log('person的age或name变化了', newValue, oldValue)
    })

    // 特殊情况（监视深层次对象中时需要加上deep:true，否则监视不到）
    watch(()=>person.job, (newValue, oldValue)=>{
      console.log('person的salary变化了', newValue, oldValue)
    },{deep:true}) // 此处由于监视的是reactive所定义的对象中的某个对象属性，所以deep配置有效


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