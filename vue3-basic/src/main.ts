import { createApp } from 'vue'
import App from './App2.vue'
import axios from 'axios';
axios.get('../public/config.json').then((res) => {
    console.log(res, '233');
  });
const app = createApp(App)
app.provide('currentUser',{name:'zjw'})
app.mount('#app')
 