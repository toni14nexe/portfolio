<script setup>
import { RouterLink, RouterView } from 'vue-router'
import LinkedInIcon from '@/assets/icons/LinkedInIcon.vue'
import GitHubIcon from '@/assets/icons/GitHubIcon.vue'
import FacebookIcon from '@/assets/icons/FacebookIcon.vue'
</script>

<template>
  <html>
    <header>
      <img class="logo" src="@/assets/images/me.jpeg" alt="Toni Kolarić" width="200" height="200" />

      <div class="header-right-container">
        <div>
          <h1 class="primary-color">Toni Kolarić</h1>
          <h1>Portfolio</h1>
        </div>

        <nav>
          <RouterLink to="/">
            <ElButton type="primary" plain>Skills</ElButton>
          </RouterLink>
          <RouterLink to="/about" class="ml-8">
            <ElButton type="primary" plain>About</ElButton>
          </RouterLink>
          <RouterLink to="/projects" class="ml-8">
            <ElButton type="primary" plain>Projects</ElButton>
          </RouterLink>
        </nav>

        <nav>
          <ElTooltip content="LinkedIn">
            <a
              href="https://www.linkedin.com/in/toni-kolari%C4%87-05254a265/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ElIcon :size="36"><LinkedInIcon color="#ebebeba3" /></ElIcon>
            </a>
          </ElTooltip>
          <ElTooltip content="GitHub">
            <a
              href="https://github.com/toni14nexe?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              class="ml-8"
            >
              <ElIcon :size="36"><GitHubIcon color="#ebebeba3" /></ElIcon>
            </a>
          </ElTooltip>
          <ElTooltip content="Facebook">
            <a
              href="https://www.facebook.com/toni.kolaric"
              target="_blank"
              rel="noopener noreferrer"
              class="ml-8"
            >
              <ElIcon :size="36"><FacebookIcon color="#ebebeba3" /></ElIcon>
            </a>
          </ElTooltip>
        </nav>
      </div>
    </header>

    <RouterView class="router-view" />
  </html>
</template>

<style scoped>
html {
  display: flex;
  gap: 22px;
  align-items: center;
  justify-content: center;
}

header {
  display: flex;
  gap: 22px;
  align-items: center;
  justify-content: center;
  max-height: calc(100vh - 4rem);
  width: 50%;
  align-self: baseline;
  margin-top: calc(50vh - 102px - 2rem);
}

.logo {
  border-radius: 50%;
  border: 2px solid var(--el-color-primary);
}

.header-right-container {
  display: flex;
  flex-direction: column;
  gap: 22px;
  align-items: flex-start;
  max-height: 100vh;
  width: 50%;
}

.router-view {
  width: 50%;
  min-height: calc(100vh - 4rem);
}
</style>
