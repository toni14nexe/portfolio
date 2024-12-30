<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import LinkedInIcon from '@/assets/icons/LinkedInIcon.vue'
import GitHubIcon from '@/assets/icons/GitHubIcon.vue'
import FacebookIcon from '@/assets/icons/FacebookIcon.vue'
import EnglishIcon from '@/assets/i18n/EnglishIcon.vue'
import CroatiaIcon from '@/assets/i18n/CroatiaIcon.vue'
import GermanIcon from '@/assets/i18n/GermanIcon.vue'
import FranceIcon from '@/assets/i18n/FranceIcon.vue'
import ItalyIcon from '@/assets/i18n/ItalyIcon.vue'
import PortugalIcon from '@/assets/i18n/PortugalIcon.vue'
import JapanIcon from '@/assets/i18n/JapanIcon.vue'
import i18n, { saveCookie } from '@/i18n'

const selectedLanguage = ref([i18n.global.locale])
const tempSelectedLanguage = ref(i18n.global.locale)
const selectedLanguageIcon = ref()
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
  const locale = i18n.global.locale
  if (locale === 'en') selectedLanguageIcon.value = EnglishIcon
  else if (locale === 'cr') selectedLanguageIcon.value = CroatiaIcon
  else if (locale === 'ge') selectedLanguageIcon.value = GermanIcon
  else if (locale === 'fr') selectedLanguageIcon.value = FranceIcon
  else if (locale === 'it') selectedLanguageIcon.value = ItalyIcon
  else if (locale === 'pt') selectedLanguageIcon.value = PortugalIcon
  else if (locale === 'ja') selectedLanguageIcon.value = JapanIcon
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
  i18n.global.locale = selectedLanguage.value[0]
  saveCookie('i18n_lang', selectedLanguage.value, 365)
  const selectedLang = languages.find((lang) => lang.value === selectedLanguage.value[0])
  selectedLanguageIcon.value = selectedLang ? selectedLang.icon : EnglishIcon
}
</script>

<template>
  <html>
    <header>
      <img class="logo" src="@/assets/images/me.jpeg" alt="Toni Kolarić" width="200" height="200" />
      <div class="header-right-container">
        <div>
          <h1 class="primary-color">Toni Kolarić</h1>
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
            <ElButton type="primary" plain>{{ $t('header.skills') }}</ElButton>
          </RouterLink>
          <RouterLink to="/about" class="ml-8">
            <ElButton type="primary" plain>{{ $t('header.about') }}</ElButton>
          </RouterLink>
          <RouterLink to="/projects" class="ml-8">
            <ElButton type="primary" plain>{{ $t('header.projects') }}</ElButton>
          </RouterLink>
        </nav>

        <nav>
          <ElTooltip :content="$t('header.LinkedIn')">
            <a
              href="https://www.linkedin.com/in/toni-kolari%C4%87-05254a265/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ElIcon :size="36"><LinkedInIcon color="#ebebeba3" /></ElIcon>
            </a>
          </ElTooltip>
          <ElTooltip :content="$t('header.GitHub')">
            <a
              href="https://github.com/toni14nexe?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              class="ml-8"
            >
              <ElIcon :size="36"><GitHubIcon color="#ebebeba3" /></ElIcon>
            </a>
          </ElTooltip>
          <ElTooltip :content="$t('header.Facebook')">
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
</style>
