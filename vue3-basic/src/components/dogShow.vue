<template>
<h1>{{ result }}</h1>
</template>

<script lang="ts">
import { defineComponent } from "vue";
interface promiseComponent {
    result:number
}
export default defineComponent({
    setup() {
        return new Promise<promiseComponent>((resolve) => {
            setTimeout(() => {
                resolve({
                    result: 42
                })
            }, 3000);
        })
    }
})
</script>

<style></style>