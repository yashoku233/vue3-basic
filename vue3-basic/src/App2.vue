<template>
  <div>
  <div class="app-2">{{ hello }}</div>
  <message :Text="hello" @change="showArtel"/>
</div>
</template>

<script setup lang="ts">
import message from  './components/message.vue'
const hello = 'Hello World';
const showArtel = (text:string)=> {
  alert(text)
}
</script>

<style>
</style>