<template>
    <div class='container' ref="container">
        <div class="content" ref="content" :style="{ transform: `translateX(-${position}px)` }">
            {{ text }}
        </div>
    </div>
</template>

<script lang="'ts'">
import { onmounted, reactive, computed, toRefs, ref} from 'vue'
export default {
    name:'tranformDemo',
    setup(){
        const content = ref(null)
        const container = ref(null)
        
        const data = reactive({
            text :'这是一个很长的文本，它会超出父容器的宽度。',
            contentWidth: computed(() =>{
                const contentwidth = content.value.offsetWidth?  content.value.offsetWidth: 0;
                return contentwidth
            }),
            containerWidth: computed(() =>{
                const containerWidth = container.value.offsetWidth?  container.value.offsetWidth: 0;
                return containerWidth
            })
        })
        
      const refData = toRefs(data);

        return{
            ...refData,
            content,
        }
    }

}
</script>

<style>
.container {
    width: 200px;
    height: 100px;
    overflow: hidden;
}

.content {
    white-space: nowrap;
}
</style>