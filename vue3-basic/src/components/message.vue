<template>
  <div>
    {{ user.name }}
    {{ user.age }} 
    <button @click="onchange">change</button>
  </div>
</template>

<script setup lang="ts">
import { defineProps,defineEmits } from 'vue';
interface IUser {
  name: string,
  age: number,
}
interface IEvents {
  (e:'change', age: number):void
}
// 带TS的写法
const props = defineProps<{user:IUser}>()
// 不带TS的写法
const emit = defineEmits<IEvents>();
const onchange = ()=>{
  emit('change', props.user.age)
}
</script>

<style>

</style>