<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
import LinkedInIcon from '@/assets/icons/LinkedInIcon.vue'
import GitHubIcon from '@/assets/icons/GitHubIcon.vue'
import FacebookIcon from '@/assets/icons/FacebookIcon.vue'
import EmailIcon from '@/assets/icons/EmailIcon.vue'
import EnglishIcon from '@/assets/i18n/EnglishIcon.vue'
import CroatiaIcon from '@/assets/i18n/CroatiaIcon.vue'
import GermanIcon from '@/assets/i18n/GermanIcon.vue'
import FranceIcon from '@/assets/i18n/FranceIcon.vue'
import ItalyIcon from '@/assets/i18n/ItalyIcon.vue'
import PortugalIcon from '@/assets/i18n/PortugalIcon.vue'
import JapanIcon from '@/assets/i18n/JapanIcon.vue'
import { saveCookie } from '@/i18n'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const route = useRoute()
const selectedLanguage = ref([locale.value])
const tempSelectedLanguage = ref(locale.value)
let selectedLanguageIcon = undefined
const languages = [
  { value: 'en', icon: EnglishIcon },
  { value: 'cr', icon: CroatiaIcon },
  { value: 'ge', icon: GermanIcon },
  { value: 'fr', icon: FranceIcon },
  { value: 'it', icon: ItalyIcon },
  { value: 'pt', icon: PortugalIcon },
  { value: 'ja', icon: JapanIcon },
]

onMounted(() => setLanguageIcon())

function setLanguageIcon() {
  if (locale.value === 'en') selectedLanguageIcon = EnglishIcon
  else if (locale.value === 'cr') selectedLanguageIcon = CroatiaIcon
  else if (locale.value === 'ge') selectedLanguageIcon = GermanIcon
  else if (locale.value === 'fr') selectedLanguageIcon = FranceIcon
  else if (locale.value === 'it') selectedLanguageIcon = ItalyIcon
  else if (locale.value === 'pt') selectedLanguageIcon = PortugalIcon
  else if (locale.value === 'ja') selectedLanguageIcon = JapanIcon
}

function changeLanguage(languageOption) {
  if (!languageOption.length) selectedLanguage.value = tempSelectedLanguage.value
  else if (languageOption[1]) {
    selectedLanguage.value = [languageOption[1]]
    tempSelectedLanguage.value = [languageOption[1]]
  } else {
    selectedLanguage.value = [languageOption[0]]
    tempSelectedLanguage.value = [languageOption[0]]
  }
  locale.value = selectedLanguage.value[0]
  saveCookie('i18n_lang', selectedLanguage.value, 365)
  const selectedLang = languages.find((lang) => lang.value === selectedLanguage.value[0])
  selectedLanguageIcon = selectedLang ? selectedLang.icon : EnglishIcon
}
</script>

<template>
  <html>
    <header>
      <img class="logo" src="@/assets/images/me.jpeg" alt="Toni Kolarić" width="200" height="200" />
      <div class="header-right-container">
        <div>
          <h1 class="primary-color title">Toni Kolarić</h1>
          <p>{{ $t('header.the_title') }}</p>
          <div class="portfolio-language-wrapper">
            <h1>{{ $t('header.portfolio') }}</h1>
            <ElSelect
              v-model="selectedLanguage"
              multiple
              @change="changeLanguage"
              class="language-select"
            >
              <template #tag>
                <ElIcon :size="28"><component :is="selectedLanguageIcon" /></ElIcon>
              </template>
              <ElOption
                v-for="lang in languages"
                :key="lang.value"
                :value="lang.value"
                class="option-wrapper"
              >
                <ElIcon :size="24"><component :is="lang.icon" /></ElIcon>
              </ElOption>
            </ElSelect>
          </div>
        </div>

        <nav>
          <RouterLink to="/">
            <ElButton type="primary" plain :class="{ 'active-btn': route.name === 'skills' }">
              {{ $t('header.skills') }}
            </ElButton>
          </RouterLink>
          <RouterLink to="/about" class="ml-8">
            <ElButton type="primary" plain :class="{ 'active-btn': route.name === 'about' }">
              {{ $t('header.about') }}
            </ElButton>
          </RouterLink>
          <RouterLink to="/projects" class="ml-8">
            <ElButton type="primary" plain :class="{ 'active-btn': route.name === 'projects' }">
              {{ $t('header.projects') }}
            </ElButton>
          </RouterLink>
        </nav>

        <nav>
          <ElTooltip :content="$t('header.LinkedIn')">
            <a
              href="https://www.linkedin.com/in/toni-kolari%C4%87-05254a265/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ElIcon :size="36"><LinkedInIcon color="#d6d6d6" /></ElIcon>
            </a>
          </ElTooltip>
          <ElTooltip :content="$t('header.GitHub')">
            <a
              href="https://github.com/toni14nexe?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              class="ml-8"
            >
              <ElIcon :size="36"><GitHubIcon color="#d6d6d6" /></ElIcon>
            </a>
          </ElTooltip>
          <ElTooltip :content="$t('header.Facebook')">
            <a
              href="https://www.facebook.com/toni.kolaric"
              target="_blank"
              rel="noopener noreferrer"
              class="ml-8"
            >
              <ElIcon :size="36"><FacebookIcon color="#d6d6d6" /></ElIcon>
            </a>
          </ElTooltip>
          <ElTooltip content="toni14nexe@gmail.com">
            <a
              href="mailto:toni14nexe@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              class="ml-8"
            >
              <ElIcon :size="36"><EmailIcon color="#d6d6d6" /></ElIcon>
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

.title {
  width: fit-content;
}

.portfolio-language-wrapper {
  display: flex;
  gap: 16px;
  align-items: center;
}

.router-view {
  width: 50%;
  min-height: calc(100vh - 4rem);
}

.language-select {
  width: 75px;
}

.option-wrapper {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
}

.active-btn {
  background-color: var(--el-color-primary);
  color: white;
}

@media (max-width: 1199px) {
  html {
    flex-direction: column;
  }

  header {
    width: 100%;
    max-height: fit-content;
    margin-top: 0;
  }

  .header-right-container {
    width: fit-content;
  }

  .router-view {
    width: 90%;
  }
}

@media (max-width: 768px) {
  header {
    flex-direction: column;
  }

  .header-right-container {
    align-items: center;
  }

  .title {
    justify-self: center;
  }

  .router-view {
    width: 100%;
  }
}
</style>
