<template>
  <div>
  <div class="app-2">{{ hello }}</div>
  <message :user="user" @change="showArtel" :name="name"/>
</div>
</template>

<script setup lang="ts">
// 虽然在setup语法糖里面想用ref里面还是要用从vue引入
import {ref} from 'vue';
import message from  './components/message.vue'
const hello = 'Hello World';
const name = ref('zjw');
const user ={
  name:'zjw',
  age:30,
}
const showArtel = (text:string)=> {
  alert(text)
}
</script>

<style>
</style>