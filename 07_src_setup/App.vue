<template>
  <Demo @hello="showHelloMsg" msg='Vue3.0' school='Geekhall'>
    <template v-slot:gh>
      <span>
        Geekhall in the span
      </span>
    </template>
  </Demo>
</template>

<script>
import Demo from './components/Demo'

export default {
  name: "App",
  components: { Demo },
  setup(){
    function showHelloMsg(value){
      alert(`hello事件被出发了，参数是${value}`)
    }

    return {
      showHelloMsg
    }
  }
};
</script>
