<template>
    <div>
        <navbarComponent />
    </div>
    <div>
        <RouterView />
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
    components: {
        navbarComponent: defineAsyncComponent(() => import('@/components/navbarComponent.vue'))
    }
}
</script>