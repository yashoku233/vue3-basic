<template>
  <div>
  <div class="app-2">{{ hello }}</div>
  <message Text="hello"/>
</div>
</template>

<script setup lang="ts">
import message from  './components/message.vue'
const hello = 'Hello World';
</script>

<style>
</style>