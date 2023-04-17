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
const props = defineProps<{user: IUser}>()
const emit = defineEmits(['change']);
const onchange = ()=>{
  emit('change', props.user.name)
}
</script>

<style>

</style>