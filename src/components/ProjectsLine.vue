<script setup>
import LineItem from './LineItem.vue'
import TcomIcon from '@/assets/icons/TcomIcon.vue'
import TravelspotIcon from '@/assets/icons/TravelspotIcon.vue'
import RaguIcon from '@/assets/icons/RaguIcon.vue'
import RoangoIcon from '@/assets/icons/RoangoIcon.vue'
import TankDatenIcon from '@/assets/icons/TankDatenIcon.vue'
import SkillIcon from '@/assets/icons/SkillIcon.vue'
import AgroAppIcon from '@/assets/icons/AgroAppIcon.vue'
import WeddingAppIcon from '@/assets/icons/WeddingAppIcon.vue'
import SvetaKnjigaIcon from '@/assets/icons/SvetaKnjigaIcon.vue'
import StudentskiPonedjeljakIcon from '@/assets/icons/StudentskiPonedjeljakIcon.vue'
import AffiliateMarketingIcon from '@/assets/icons/AffiliateMarketingIcon.vue'
import PokemonIcon from '@/assets/icons/PokemonIcon.vue'
import PurpleHatIcon from '@/assets/icons/PurpleHatIcon.vue'
import ChineseFoodIcon from '@/assets/icons/ChineseFoodIcon.vue'
import GitHubIcon from '@/assets/icons/GitHubIcon.vue'
import OpenLinkIcon from '@/assets/icons/OpenLinkIcon.vue'
</script>

<template>
  <LineItem href="https://www.hrvatskitelekom.hr">
    <template #icon>
      <ElIcon :size="28">
        <TcomIcon />
      </ElIcon>
    </template>
    <template #heading>
      <div class="heading-container">
        {{ $t('projects.onehub.title') }}
        <ElIcon :size="20"><OpenLinkIcon /></ElIcon>
      </div>
    </template>
    {{ $t('projects.onehub.description') }}
  </LineItem>

  <LineItem href="https://github.com/barrage/ragu-web-app">
    <template #icon>
      <ElIcon :size="28">
        <RaguIcon />
      </ElIcon>
    </template>
    <template #heading>
      <div class="heading-container">
        {{ $t('projects.ragu.title') }}
        <ElIcon :size="20"><OpenLinkIcon /></ElIcon>
      </div>
    </template>
    {{ $t('projects.ragu.description') }}
  </LineItem>

  <LineItem href="https://www.travelspot.com">
    <template #icon>
      <ElIcon :size="28">
        <TravelspotIcon />
      </ElIcon>
    </template>
    <template #heading>
      <div class="heading-container">
        {{ $t('projects.travelspot.title') }}
        <ElIcon :size="20"><OpenLinkIcon /></ElIcon></div
    ></template>
    {{ $t('projects.travelspot.description') }}
  </LineItem>

  <LineItem href="https://www.roango.com">
    <template #icon>
      <ElIcon :size="28">
        <RoangoIcon />
      </ElIcon>
    </template>
    <template #heading>
      <div class="heading-container">
        {{ $t('projects.roango.title') }}
        <ElIcon :size="20"><OpenLinkIcon /></ElIcon></div
    ></template>
    {{ $t('projects.roango.description') }}
  </LineItem>

  <LineItem href="https://tankdaten.net/">
    <template #icon>
      <ElIcon :size="28">
        <TankDatenIcon />
      </ElIcon>
    </template>
    <template #heading>
      <div class="heading-container">
        {{ $t('projects.tankdaten.title') }}
        <ElIcon :size="20"><OpenLinkIcon /></ElIcon></div
    ></template>
    {{ $t('projects.tankdaten.description') }}
  </LineItem>

  <LineItem href="https://expertise-application-expertise-web-development.guja.barrage.corp">
    <template #icon>
      <ElIcon :size="28">
        <SkillIcon />
      </ElIcon>
    </template>
    <template #heading>
      <div class="heading-container">
        {{ $t('projects.expertise.title') }}
        <ElIcon :size="20"><OpenLinkIcon /></ElIcon></div
    ></template>
    {{ $t('projects.expertise.description') }}
  </LineItem>

  <LineItem href="https://agro-application.netlify.app">
    <template #icon>
      <ElIcon :size="28">
        <AgroAppIcon />
      </ElIcon>
    </template>
    <template #heading>
      <div class="heading-container">
        {{ $t('projects.agro_app.title') }}
        <ElIcon :size="20"><OpenLinkIcon /></ElIcon></div
    ></template>
    {{ $t('projects.agro_app.description') }}
  </LineItem>

  <LineItem href="https://github.com/toni14nexe/wedding_template">
    <template #icon>
      <ElIcon :size="28">
        <WeddingAppIcon />
      </ElIcon>
    </template>
    <template #heading>
      <div class="heading-container">
        {{ $t('projects.wedding_application.title') }}
        <ElIcon :size="20"><OpenLinkIcon /></ElIcon></div
    ></template>
    {{ $t('projects.wedding_application.description') }}
  </LineItem>

  <LineItem href="https://sveta-knjiga.netlify.app/">
    <template #icon>
      <ElIcon :size="28">
        <SvetaKnjigaIcon />
      </ElIcon>
    </template>
    <template #heading>
      <div class="heading-container">
        {{ $t('projects.holy_book.title') }}
        <ElIcon :size="20"><OpenLinkIcon /></ElIcon></div
    ></template>
    {{ $t('projects.holy_book.description') }}
  </LineItem>

  <LineItem href="https://studentski.netlify.app/">
    <template #icon>
      <ElIcon :size="28">
        <StudentskiPonedjeljakIcon />
      </ElIcon>
    </template>
    <template #heading>
      <div class="heading-container">
        {{ $t('projects.student_monday.title') }}
        <ElIcon :size="20"><OpenLinkIcon /></ElIcon></div
    ></template>
    {{ $t('projects.student_monday.description') }}
  </LineItem>

  <LineItem href="https://stunning-gumption-a4b1f6.netlify.app">
    <template #icon>
      <ElIcon :size="28">
        <AffiliateMarketingIcon />
      </ElIcon>
    </template>
    <template #heading>
      <div class="heading-container">
        {{ $t('projects.affiliate_marketing.title') }}
        <ElIcon :size="20"><OpenLinkIcon /></ElIcon></div
    ></template>
    {{ $t('projects.affiliate_marketing.description') }}
  </LineItem>

  <LineItem href="https://starlit-treacle-8c8798.netlify.app">
    <template #icon>
      <ElIcon :size="28">
        <PokemonIcon />
      </ElIcon>
    </template>
    <template #heading>
      <div class="heading-container">
        {{ $t('projects.pokemons.title') }}
        <ElIcon :size="20"><OpenLinkIcon /></ElIcon></div
    ></template>
    {{ $t('projects.pokemons.description') }}
  </LineItem>

  <LineItem href="https://tiny-cascaron-845002.netlify.app">
    <template #icon>
      <ElIcon :size="28">
        <PurpleHatIcon />
      </ElIcon>
    </template>
    <template #heading>
      <div class="heading-container">
        {{ $t('projects.the_purple_hat.title') }}
        <ElIcon :size="20"><OpenLinkIcon /></ElIcon></div
    ></template>
    {{ $t('projects.the_purple_hat.description') }}
  </LineItem>

  <LineItem href="https://app.netlify.com/sites/ephemeral-cat-833154/overvie">
    <template #icon>
      <ElIcon :size="28">
        <ChineseFoodIcon />
      </ElIcon>
    </template>
    <template #heading>
      <div class="heading-container">
        {{ $t('projects.chinese_food.title') }}
        <ElIcon :size="20"><OpenLinkIcon /></ElIcon>
      </div>
    </template>
    {{ $t('projects.chinese_food.description') }}
  </LineItem>

  <LineItem href="https://github.com/toni14nexe?tab=repositories">
    <template #icon>
      <ElIcon :size="28">
        <GitHubIcon />
      </ElIcon>
    </template>
    <template #heading>
      <div class="heading-container">
        {{ $t('projects.github_repository.title') }}
        <ElIcon :size="20"><OpenLinkIcon /></ElIcon></div
    ></template>
    {{ $t('projects.github_repository.description') }}
  </LineItem>
</template>

<style lang="css" scoped>
.heading-container {
  display: flex;
  gap: 8px;
  align-items: center;
}
</style>
