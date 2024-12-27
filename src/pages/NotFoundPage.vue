<script setup></script>

<template>
  <main class="main">
    <h1 class="primary-color">Page not found</h1>
    <RouterLink to="/">
      <ElButton type="primary" round plain>Go back to skills</ElButton>
    </RouterLink>
  </main>
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  gap: 22px;
  align-items: center;
  justify-content: center;
}

a {
  border-radius: var(--el-border-radius-round);
}
</style>
