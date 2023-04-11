<template>
    <div id="center" v-if="isOpen">
      <h2>
        <slot>this is a modal</slot>
      </h2>
      <button @click="buttonClick">Close</button>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name:'modal',
  props: {
    isOpen: Boolean,
  },
  setup(props,context) {
    const buttonClick = () => {
      context.emit('close-modal');
    };
    return {
      buttonClick,
    };
  },
});
</script>

<style>
  #center {
    width: 200px;
    height: 200px;
    border: 2px solid black;
    background: white;
    position: fixed;
    left: 50%;
    top: 50%;
    margin-left: -100px;
    margin-top: -100px;
  }
</style>
