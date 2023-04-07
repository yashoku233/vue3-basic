<template>
  <h1>{{result}}</h1>
</template>

<script>
export default {
  setup() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          result: 42,
        });
      }, 3000);
    });
  },
};
</script>

<style>
</style>