<script setup>
import PersonalInfoIcon from '@/assets/icons/PersonalInfoIcon.vue'
import LocaleIcon from '@/assets/icons/LocaleIcon.vue'
import EarlyYearsIcon from '@/assets/icons/EarlyYearsIcon.vue'
import EducationIcon from '@/assets/icons/EducationIcon.vue'
import ProfessionalExperienceIcon from '@/assets/icons/ProfessionalExperienceIcon.vue'
import PrivateProjectsIcon from '@/assets/icons/PrivateProjectsIcon.vue'
import PersonalQualitiesIcon from '@/assets/icons/PersonalQualitiesIcon.vue'
import CertificatesIcon from '@/assets/icons/CertificatesIcon.vue'
import CroatiaIcon from '@/assets/i18n/CroatiaIcon.vue'
import EnglishIcon from '@/assets/i18n/EnglishIcon.vue'
import OpenLinkIcon from '@/assets/icons/OpenLinkIcon.vue'
import BlogIcon from '@/assets/icons/BlogIcon.vue'
</script>

<template>
  <div class="about-container">
    <div class="paragraph-wrapper">
      <div class="title-wrapper">
        <ElIcon :size="28"><PersonalInfoIcon color="white" /></ElIcon>
        <h2 class="color-white">{{ $t('about.personal_information') }}</h2>
      </div>
      <div>
        <p>
          <span class="color-white">{{ `${$t('about.name')}: Toni Kolarić` }}</span>
          <br />
          <span class="color-white">{{ `${$t('about.birth')}: ${$t('about.birth_date')}` }}</span>
          <br />
          <span class="color-white">{{ `${$t('about.place_of_birth')}: Našice, Croatia` }}</span>
          <br />
          <span class="color-white">{{ `${$t('about.residence')}: Martin, Našice, Croatia` }}</span>
          <br />
          <span class="color-white">{{ $t('about.current_position') }}</span>
          <br />
          {{ $t('about.professional_developer_since_2021') }}
        </p>
      </div>
    </div>

    <div class="paragraph-wrapper">
      <div class="title-wrapper">
        <ElIcon :size="28"><LocaleIcon color="white" /></ElIcon>
        <h2 class="color-white">{{ $t('about.languages.title') }}</h2>
      </div>
      <div>
        <div class="title-wrapper">
          <ElIcon :size="28" class="mr-8"><CroatiaIcon color="white" /></ElIcon>
          {{ $t('about.languages.croatian') }}
        </div>
        <div class="title-wrapper mt-8">
          <ElIcon :size="28" class="mr-8"><EnglishIcon color="white" /></ElIcon>
          {{ $t('about.languages.english') }}
        </div>
      </div>
    </div>

    <div class="paragraph-wrapper">
      <div class="title-wrapper">
        <ElIcon :size="28"><EarlyYearsIcon color="white" /></ElIcon>
        <h2 class="color-white">{{ $t('about.early_years.title') }}</h2>
      </div>
      <p>{{ $t('about.early_years.text') }}</p>
    </div>

    <div class="paragraph-wrapper">
      <div class="title-wrapper">
        <ElIcon :size="28"><EducationIcon color="white" /></ElIcon>
        <h2 class="color-white">{{ $t('about.Education.titile') }}</h2>
      </div>
      <p>
        <span class="color-white">{{ $t('about.Education.primary.title') }}</span>
        <br />
        {{ $t('about.Education.primary.text') }}
        <br /><br />
        <span class="color-white">{{ $t('about.Education.secondary.title') }}</span>
        <br />
        {{ $t('about.Education.secondary.text') }}
        <br /><br />
        <span class="color-white">
          {{ $t('about.Education.higher.title') }}
        </span>
        <br />
        {{ $t('about.Education.higher.text') }}
      </p>
    </div>

    <div class="paragraph-wrapper">
      <div class="title-wrapper">
        <ElIcon :size="28"><ProfessionalExperienceIcon color="white" /></ElIcon>
        <h2 class="color-white">{{ $t('about.professional_experience.title') }}</h2>
      </div>
      <p>
        <span class="color-white">{{ $t('about.professional_experience.barrage.title') }}</span>
        <br />
        {{ $t('about.professional_experience.barrage.text1') }}
        <br />
        {{ $t('about.professional_experience.barrage.text2') }}
        <br />
        {{ $t('about.professional_experience.barrage.before_projects') }}
        <br />
        <span class="color-white"
          >- {{ $t('about.professional_experience.barrage.project1.title') }}:</span
        >
        {{ $t('about.professional_experience.barrage.project1.text') }}
        <br />
        <span class="color-white"
          >- {{ $t('about.professional_experience.barrage.project2.title') }}:</span
        >
        {{ $t('about.professional_experience.barrage.project2.text') }}
        <br />
        {{ $t('about.professional_experience.barrage.text3') }}
        <br />
        {{ $t('about.professional_experience.barrage.text4') }}
        <br />
        {{ $t('about.professional_experience.barrage.text5.first_part') }}
        <RouterLink to="/projects">
          {{ $t('about.professional_experience.barrage.text5.url_part') }}
        </RouterLink>
      </p>
    </div>

    <div class="paragraph-wrapper">
      <div class="title-wrapper">
        <ElIcon :size="28"><PrivateProjectsIcon color="white" /></ElIcon>
        <h2 class="color-white">{{ $t('about.private_projects.title') }}</h2>
      </div>
      <p>
        {{ $t('about.private_projects.text') }}
        <br />
        <span class="color-white">- {{ $t('about.private_projects.frontend_skills.title') }}:</span>
        {{ $t('about.private_projects.frontend_skills.text') }}
        <br />
        <span class="color-white">- {{ $t('about.private_projects.backend_skills.title') }}:</span>
        {{ $t('about.private_projects.backend_skills.text') }}
        <br />
        <span class="color-white">- {{ $t('about.private_projects.database_skills.title') }}:</span>
        {{ $t('about.private_projects.database_skills.text') }}
      </p>
    </div>

    <div class="paragraph-wrapper">
      <div class="title-wrapper">
        <ElIcon :size="28"><PersonalQualitiesIcon color="white" /></ElIcon>
        <h2 class="color-white">{{ $t('about.personal_qualities.title') }}</h2>
      </div>
      <p>
        {{ $t('about.personal_qualities.text1') }}
        <br /><br />
        {{ $t('about.personal_qualities.text2') }}
      </p>
    </div>

    <div class="paragraph-wrapper">
      <div class="title-wrapper">
        <ElIcon :size="28"><BlogIcon color="white" /></ElIcon>
        <h2 class="color-white">{{ $t('about.blogs.title') }}</h2>
      </div>
      <p>
        <span class="blog-link-container">
          - {{ $t('about.blogs.pwa') }}
          <a
            href="https://www.barrage.net/blog/technology/progressive-web-apps-save-time-and-improve-user-experience"
            target="_blank"
            class="blog-link"
          >
            <ElIcon :size="20">
              <OpenLinkIcon />
            </ElIcon>
          </a>
        </span>
        - {{ $t('about.blogs.eea') }} <br />
      </p>
    </div>

    <div class="paragraph-wrapper">
      <div class="title-wrapper">
        <ElIcon :size="28"><CertificatesIcon color="white" /></ElIcon>
        <h2 class="color-white">{{ $t('about.certificates.title') }}</h2>
      </div>
      <p>
        - {{ $t('about.certificates.hedera-certificate') }} <br />
        - {{ $t('about.certificates.test-driven-development-java-beginners') }} <br />
        - {{ $t('about.certificates.software-processes-agile-practices') }} <br />
        - {{ $t('about.certificates.software-development-processes-methodologies') }} <br />
        - {{ $t('about.certificates.software-architecture') }} <br />
        - {{ $t('about.certificates.service-oriented-architecture') }} <br />
        - {{ $t('about.certificates.server-side-development-nodejs-express-mongodb') }} <br />
        - {{ $t('about.certificates.programming-foundations-javascript-html') }} <br />
        - {{ $t('about.certificates.object-oriented-design') }} <br />
        - {{ $t('about.certificates.linux-commands-shell-scripting-essentials') }} <br />
        - {{ $t('about.certificates.linux-fundamentals') }} <br />
        - {{ $t('about.certificates.lean-software-development') }} <br />
        - {{ $t('about.certificates.kubernetes-basic-architecture-first') }} <br />
        - {{ $t('about.certificates.java-programming-solving-problems-with-software') }} <br />
        - {{ $t('about.certificates.java-programming-principles-software-design') }} <br />
        - {{ $t('about.certificates.java-programming-build-recommendation-system') }} <br />
        - {{ $t('about.certificates.java-programming-arrays-lists-structured-data') }} <br />
        - {{ $t('about.certificates.introduction-unit-testing-jest-fundamentals') }} <br />
        - {{ $t('about.certificates.introduction-test-driven-development') }} <br />
        - {{ $t('about.certificates.introduction-mongodb') }} <br />
        - {{ $t('about.certificates.introduction-git-github') }} <br />
        - {{ $t('about.certificates.hands-on-introduction-linux-commands') }} <br />
        - {{ $t('about.certificates.front-end-web-ui-frameworks-tools-bootstrap-4') }} <br />
        - {{ $t('about.certificates.front-end-web-development-react') }} <br />
        - {{ $t('about.certificates.engineering-practices-building-quality') }} <br />
        - {{ $t('about.certificates.docker-for-absolute-beginners') }} <br />
        - {{ $t('about.certificates.design-patterns') }} <br />
        - {{ $t('about.certificates.database-design-basic-sql-postgresql') }} <br />
        - {{ $t('about.certificates.client-needs-software-requirements') }} <br />
        - {{ $t('about.certificates.c-for-everyone-programming-fundamentals') }} <br />
        - {{ $t('about.certificates.beginners-guide-yaml-syntax') }} <br />
        - {{ $t('about.certificates.agile-software-development') }} <br />
        - {{ $t('about.certificates.practical-introduction-test-driven') }} <br />
      </p>
    </div>
  </div>
</template>

<style>
.about-container {
  display: flex;
  flex-direction: column;
  gap: 22px;
}

.paragraph-wrapper {
  display: flex;
  flex-direction: column;
  gap: 22px;
}

.title-wrapper {
  display: flex;
  gap: 16px;
  align-items: center;
}

.blog-link-container {
  display: flex;
  align-items: center;
  gap: 8px;
}

.blog-link {
  display: flex;
  align-items: center;
}
</style>
