<script setup>
import LineItem from './LineItem.vue'
import HtmlIcon from '@/assets/icons/HtmlIcon.vue'
import CssIcon from '@/assets/icons/CssIcon.vue'
import ScssIcon from '@/assets/icons/ScssIcon.vue'
import JavascriptIcon from '@/assets/icons/JavascriptIcon.vue'
import VueIcon from '@/assets/icons/VueIcon.vue'
import NuxtIcon from '@/assets/icons/NuxtIcon.vue'
import GitIcon from '@/assets/icons/GitIcon.vue'
import NodeIcon from '@/assets/icons/NodeIcon.vue'
import HederaIcon from '@/assets/icons/HederaIcon.vue'
import CourseraIcon from '@/assets/icons/CourseraIcon.vue'
import ReactIcon from '@/assets/icons/ReactIcon.vue'
import NextIcon from '@/assets/icons/NextIcon.vue'
import SqlIcon from '@/assets/icons/SqlIcon.vue'
import PythonIcon from '@/assets/icons/PythonIcon.vue'
import JavaIcon from '@/assets/icons/JavaIcon.vue'
import CIcon from '@/assets/icons/CIcon.vue'
import PhpIcon from '@/assets/icons/PhpIcon.vue'
import ExpressIcon from '@/assets/icons/ExpressIcon.vue'
import MongoIcon from '@/assets/icons/MongoIcon.vue'
import PrismaIcon from '@/assets/icons/PrismaIcon.vue'
import NestIcon from '@/assets/icons/NestIcon.vue'
</script>

<template>
  <ElRow>
    <ElCol :xs="24" :sm="12" :md="12" :lg="24" :xl="12">
      <LineItem>
        <template #icon>
          <ElIcon :size="28">
            <HtmlIcon />
          </ElIcon>
        </template>
        <template #heading>HTML</template>
        {{ `${$t('skills.since')} 2016` }}
      </LineItem>
    </ElCol>

    <ElCol :xs="24" :sm="12" :md="12" :lg="24" :xl="12">
      <LineItem>
        <template #icon>
          <ElIcon :size="28">
            <CssIcon />
          </ElIcon>
        </template>
        <template #heading>CSS</template>
        {{ `${$t('skills.since')} 2016` }}
      </LineItem>
    </ElCol>

    <ElCol :xs="24" :sm="12" :md="12" :lg="24" :xl="12">
      <LineItem>
        <template #icon>
          <ElIcon :size="28">
            <JavascriptIcon />
          </ElIcon>
        </template>
        <template #heading>Javascript</template>
        {{ `${$t('skills.since')} 2020` }}
      </LineItem>
    </ElCol>

    <ElCol :xs="24" :sm="12" :md="12" :lg="24" :xl="12">
      <LineItem>
        <template #icon>
          <ElIcon :size="28"> <GitIcon /></ElIcon>
        </template>
        <template #heading>Git</template>
        {{ `${$t('skills.since')} 2020` }}
      </LineItem>
    </ElCol>

    <ElCol :xs="24" :sm="12" :md="12" :lg="24" :xl="12">
      <LineItem>
        <template #icon>
          <ElIcon :size="28"> <VueIcon /></ElIcon>
        </template>
        <template #heading>Vue.js</template>
        {{ `${$t('skills.since')} 2021` }}
      </LineItem>
    </ElCol>

    <ElCol :xs="24" :sm="12" :md="12" :lg="24" :xl="12">
      <LineItem>
        <template #icon>
          <ElIcon :size="28"> <NuxtIcon /></ElIcon>
        </template>
        <template #heading>Nuxt</template>
        {{ `${$t('skills.since')} 2021` }}
      </LineItem>
    </ElCol>

    <ElCol :xs="24" :sm="12" :md="12" :lg="24" :xl="12">
      <LineItem>
        <template #icon>
          <ElIcon :size="28"> <NodeIcon /></ElIcon>
        </template>
        <template #heading>Node.js</template>
        {{ `${$t('skills.since')} 2021` }}
      </LineItem>
    </ElCol>

    <ElCol :xs="24" :sm="12" :md="12" :lg="24" :xl="12">
      <LineItem>
        <template #icon>
          <ElIcon :size="28">
            <ScssIcon />
          </ElIcon>
        </template>
        <template #heading>SCSS</template>
        {{ `${$t('skills.since')} 2023` }}
      </LineItem>
    </ElCol>

    <ElCol :xs="24" :sm="12" :md="12" :lg="24" :xl="12">
      <LineItem>
        <template #icon>
          <ElIcon :size="28"> <CourseraIcon /></ElIcon>
        </template>
        <template #heading>{{ $t('skills.lots_of_oursera_certificates') }}</template>
        2021
      </LineItem>
    </ElCol>

    <ElCol :xs="24" :sm="12" :md="12" :lg="24" :xl="12">
      <LineItem>
        <template #icon>
          <ElIcon :size="28"> <HederaIcon /></ElIcon>
        </template>
        <template #heading>{{ $t('skills.hedera_certificate') }}</template>
        2023
      </LineItem>
    </ElCol>

    <ElCol :xs="24" :sm="12" :md="12" :lg="24" :xl="12">
      <LineItem>
        <template #icon>
          <ElIcon :size="28"> <ReactIcon /></ElIcon>
        </template>
        <template #heading>React</template>
        {{ `1 ${$t('skills.year_of_experiance')}` }}
      </LineItem>
    </ElCol>

    <ElCol :xs="24" :sm="12" :md="12" :lg="24" :xl="12">
      <LineItem>
        <template #icon>
          <ElIcon :size="28"> <NextIcon /></ElIcon>
        </template>
        <template #heading>Next</template>
        {{ `1 ${$t('skills.year_of_experiance')}` }}
      </LineItem>
    </ElCol>

    <ElCol :xs="24" :sm="12" :md="12" :lg="24" :xl="12">
      <LineItem>
        <template #icon>
          <ElIcon :size="28"> <PrismaIcon /></ElIcon>
        </template>
        <template #heading>Prisma</template>
        {{ `1 ${$t('skills.year_of_experiance')}` }}
      </LineItem>
    </ElCol>

    <ElCol :xs="24" :sm="12" :md="12" :lg="24" :xl="12">
      <LineItem>
        <template #icon>
          <ElIcon :size="28"> <SqlIcon /></ElIcon>
        </template>
        <template #heading>SQL - MySQL & PostreSQL</template>
        {{ `1 ${$t('skills.year_of_experiance')}` }}
      </LineItem>
    </ElCol>

    <ElCol :xs="24" :sm="12" :md="12" :lg="24" :xl="12">
      <LineItem>
        <template #icon>
          <ElIcon :size="28"> <MongoIcon /></ElIcon>
        </template>
        <template #heading>MongoDB</template>
        {{ `6 ${$t('skills.months_of_experiance')}` }}
      </LineItem>
    </ElCol>

    <ElCol :xs="24" :sm="12" :md="12" :lg="24" :xl="12">
      <LineItem>
        <template #icon>
          <ElIcon :size="28"> <PythonIcon /></ElIcon>
        </template>
        <template #heading>Python</template>
        {{ `3 ${$t('skills.months_of_experiance')}` }}
      </LineItem>
    </ElCol>

    <ElCol :xs="24" :sm="12" :md="12" :lg="24" :xl="12">
      <LineItem>
        <template #icon>
          <ElIcon :size="28"> <JavaIcon /></ElIcon>
        </template>
        <template #heading>Java</template>
        {{ `3 ${$t('skills.months_of_experiance')}` }}
      </LineItem>
    </ElCol>

    <ElCol :xs="24" :sm="12" :md="12" :lg="24" :xl="12">
      <LineItem>
        <template #icon>
          <ElIcon :size="28"> <CIcon /></ElIcon>
        </template>
        <template #heading>C++</template>
        {{ `3 ${$t('skills.months_of_experiance')}` }}
      </LineItem>
    </ElCol>

    <ElCol :xs="24" :sm="12" :md="12" :lg="24" :xl="12">
      <LineItem>
        <template #icon>
          <ElIcon :size="28"> <PhpIcon /></ElIcon>
        </template>
        <template #heading>PHP</template>
        {{ `3 ${$t('skills.months_of_experiance')}` }}
      </LineItem>
    </ElCol>

    <ElCol :xs="24" :sm="12" :md="12" :lg="24" :xl="12">
      <LineItem>
        <template #icon>
          <ElIcon :size="28"> <ExpressIcon /></ElIcon>
        </template>
        <template #heading>Express.js</template>
        {{ `3 ${$t('skills.months_of_experiance')}` }}
      </LineItem>
    </ElCol>

    <ElCol :xs="24" :sm="12" :md="12" :lg="24" :xl="12">
      <LineItem>
        <template #icon>
          <ElIcon :size="28"> <NestIcon /></ElIcon>
        </template>
        <template #heading>Nest.js</template>
        {{ `1 ${$t('skills.month_of_experiance')}` }}
      </LineItem>
    </ElCol>
  </ElRow>
</template>

<style>
.el-icon {
  color: white;
}
@media (min-width: 1199px) {
  .el-icon {
    color: var(--vt-c-text-light-2);
  }
}
@media (prefers-color-scheme: dark) {
  .el-icon {
    color: white;
  }
}
</style>