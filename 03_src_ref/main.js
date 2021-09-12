// 对比Vue2：（import Vue from 'vue'）
// 引入的不再是Vue构造函数了 
// 引入的是一个名为createApp的工厂函数
import { createApp } from 'vue'
import App from './App.vue'

//  对比Vue2
// new Vue({
//     render: h => h(App)
// }).$mount('#app')
// or
// new Vue({
//     el: '#app',
//     render: h => h(App)
// })

// 创建应用实例对象-app（类似于Vue2中的vm，但app比vm更轻量）
// createApp(App).mount('#app')
const app = createApp(App)

app.mount('#app')
// setTimeout(()=>{
//     app.unmount('#app')
// },1000)
