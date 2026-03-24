<template>
    <header class="header">
    <h1>My Figma Plugin</h1>
    <p>使用 Vue 3 + Vite 构建的 Figma 插件模板</p>
  </header>
</template>

<style scoped>
.plugin {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.header h1 {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 4px;
}

.header p {
  color: var(--color-text-secondary);
  font-size: 12px;
}
</style>