<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <h1>{{ count }}</h1>
  <h1>{{ countcopy }}</h1>
  <h1>{{ double }}</h1>
  <h1>X:{{ x }}</h1>
  <h1>Y:{{ y }}</h1>
  <tranform-demo />
  <suspense>
    <template #default>
      <dog-show />
    </template>
    <template #fallback>
      <h1>Loading!....</h1>
    </template>
  </suspense>
  <h1 v-if="loading"> </h1>
  <img v-if="loaded" :src="result.message">
  <button @click="increase"> 👍+1</button>
  <button @click="updateGreeting"> Updata</button>
</template>

<script lang="ts">
/* eslint-disable */
import { ref, computed, reactive, toRefs, onMounted, onUnmounted, watch } from 'vue';
import useMousePositions from './hook/useMousePositions'
import useURLloader from './hook/useLoader'
import useModel from './components/useModel.vue'
import dogShow from './components/dogShow.vue'
import tranformDemo from './components/tranformDemo.vue'

interface DataProps {
  count: number,
  double: number,
  increase: () => void,
  numbers: number[];
  person: { name?: string },
}
interface DogResult {
  result: string,
  status: string,
  message: string,
}
interface CatResult{
  url:string,
  id:string,
  width:number,
  height:number,
}
export default {
  name: 'App',
   components: {
   useModel,
   dogShow,
   tranformDemo,
  },
  setup() {
    const data: DataProps = reactive({
      count: 0,
      double: computed(() => data.count * 2),
      increase: () => {
        data.count++
      },
      numbers: [0, 1, 3],
      person: { name: 'zjw' },
    })
    const datacopy = reactive({
      countcopy: 0,
      doublecopy: computed(() => data.count * 2),
      increase: () => {
        data.count++
      },
      numbers: [0, 1, 3],
      person: { name: 'zjw' },
    })
    const greetings = ref('');
    const updateGreeting = () => {
      greetings.value += 'Hello!'
    }

    const { loaded, loading, result } = useURLloader<CatResult[]>('https://dog.ceo/api/breeds/image/random');
    watch(result, () => {
      if (result.value) {
        console.log(result.value[0].url)
      }
    })
    const { x, y } = useMousePositions();
    const refData = toRefs(data);
    const refDataCopy = toRefs(datacopy);
    return {
      ...refData,
      ...refDataCopy,
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
