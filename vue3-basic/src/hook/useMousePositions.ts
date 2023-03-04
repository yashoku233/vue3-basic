import { ref, onMounted, onUnmounted } from 'vue';

function useMousePosition() {
    const x = ref(0);
    const y = ref(0);
    const updateMouse = (e:MouseEvent) =>{
      x.value = e.pageX;
      y.value = e.pageY
    }
    onMounted(() =>{
      console.log('组件被注册');
      document.addEventListener("click",updateMouse)
    })
    onUnmounted(() =>{
      console.log('组件被卸载');
      document.removeEventListener('click',updateMouse)
    })
    return {x,y}
}

export default useMousePosition