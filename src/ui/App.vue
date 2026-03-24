<template>
  <div class="plugin">
   <Header />
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import Header from './component/Header.vue'

function handleMessage(event: MessageEvent) {
  const msg = event.data.pluginMessage
  if (!msg) return
}

onMounted(() => {
  window.addEventListener('message', handleMessage)
})

onUnmounted(() => {
  window.removeEventListener('message', handleMessage)
})
</script>

<style scoped>
.plugin{
  display: flex;
}
</style>
