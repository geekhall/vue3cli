<template>
  <h1>一个人的信息</h1>
  <h2>姓：<input type="text" v-model="person.firstname"> </h2>
  <h2>名：<input type="text" v-model="person.lastname"> </h2>
  <h2>姓名： {{person.fullname}}</h2>
  <br>
  全名：<input type="text" v-model="person.fullname">
</template>

<script>
import { reactive , computed} from "vue";

export default {
  name: "Demo",
  setup() {
    // 数据
    let person = reactive({
      firstname: '张',
      lastname: '三'
    })

    // 计算属性，简写（没有考虑计算属性被修改的情况）
    // person.fullname = computed(()=>{
    //   return person.firstname + '_' + person.lastname
    // })
    // 计算属性， 完整写法(考虑读和写)
    person.fullname = computed({
      get(){
        return person.firstname + '_' + person.lastname
      },
      set(value){
        const nameAttr = value.split('_')
        person.firstname = nameAttr[0]
        person.lastname = nameAttr[1]
      }
    })

    return {
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