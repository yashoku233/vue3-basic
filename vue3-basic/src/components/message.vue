<template>
  <div>
    {{ Text }}
    <button @click="onchange"></button>
  </div>
</template>

<script setup lang="ts">
import { defineProps,defineEmits } from 'vue';
const props = defineProps({
    Text:String,
})
const emit = defineEmits(['change']);
const onchange = ()=>{
  emit('change', props.Text)
}
</script>

<style>

</style>