<template>
    <div id="center" v-if="isOpen">
      <h2>
        <slot>this is a modal</slot>
        <h2>{{lang}}</h2>
        <h2>{{currentUser && currentUser.name}}</h2>
      </h2>
      <button @click="buttonClick">Close</button>
    </div>
</template>

<script lang="ts">
import { inject, defineComponent } from 'vue';
export default defineComponent({
  // inject 拿到 provide 提供的数据
  name:'modal',
  props: {
    isOpen: Boolean,
  },
  setup(props, {emit}) {
    const lang = inject('lang')
    const currentUser = inject<{name: string}>('currentUser')
    const buttonClick = () => {
      emit('close-modal');
    };
    return {
      buttonClick,
      lang,
      currentUser,
    };
  },
});
</script>

<style>
  #center {
    width: 200px;
    height: 300px;
    border: 2px solid black;
    background: white;
    position: fixed;
    left: 50%;
    top: 50%;
    margin-left: -100px;
    margin-top: -100px;
  }
</style>
