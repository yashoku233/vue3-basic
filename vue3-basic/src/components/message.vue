<template>
  <div>
    {{ Text }}
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
const props = defineProps({
    Text:String,
})
</script>

<style>

</style>