<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <h1>{{count}}</h1>
  <h1>{{double}}</h1>
  <h1>X:{{x}}</h1>
  <h1>Y:{{y}}</h1>
  <button @click="increase"> 👍+1</button>
  <button @click="updateGreeting"> Updata</button>
</template>

<script lang="ts">
/* eslint-disable */
import {ref, computed, reactive, toRefs, onMounted, onUnmounted} from 'vue';
import useMousePositions from './hook/useMousePositions'
import useURLloader from './hook/useLoader'
interface DataProps {
  count:number,
  double: number,
  increase: () => void,
  numbers:number[];
  person: {name?:string},
}
export default {
  name: 'App',
  setup(){
    const data: DataProps  = reactive({
      count:0,
      double: computed(() => data.count *2),
      increase: ()=> {
        data.count++
      },
      numbers:[0, 1, 3],
      person:{name:'zjw'},
    })
    const greetings = ref('');
    const updateGreeting = () => {
      greetings.value += 'Hello!'
    }
    const {loaded, loading, result} = useURLloader('htps://dog.eco/api/breeds/imange/random');
    const {x, y} = useMousePositions();
    const refData = toRefs(data);
    return {
      ...refData,
      greetings,
      updateGreeting,
      x,
      y,
      loaded,
      loading,
      result,
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
