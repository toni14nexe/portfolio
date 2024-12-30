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
  <LineItem>
    <template #icon>
      <ElIcon :size="28">
        <HtmlIcon />
      </ElIcon>
    </template>
    <template #heading>HTML</template>
    Since 2016
  </LineItem>

  <LineItem>
    <template #icon>
      <ElIcon :size="28">
        <CssIcon />
      </ElIcon>
    </template>
    <template #heading>CSS</template>
    Since 2016
  </LineItem>

  <LineItem>
    <template #icon>
      <ElIcon :size="28">
        <JavascriptIcon />
      </ElIcon>
    </template>
    <template #heading>Javascript</template>
    Since 2020
  </LineItem>

  <LineItem>
    <template #icon>
      <ElIcon :size="28"> <GitIcon /></ElIcon>
    </template>
    <template #heading>Git</template>
    Since 2020
  </LineItem>

  <LineItem>
    <template #icon>
      <ElIcon :size="28"> <VueIcon /></ElIcon>
    </template>
    <template #heading>Vue.js</template>
    Since 2021
  </LineItem>

  <LineItem>
    <template #icon>
      <ElIcon :size="28"> <NuxtIcon /></ElIcon>
    </template>
    <template #heading>Nuxt</template>
    Since 2021
  </LineItem>

  <LineItem>
    <template #icon>
      <ElIcon :size="28"> <NodeIcon /></ElIcon>
    </template>
    <template #heading>Node.js</template>
    Since 2021
  </LineItem>

  <LineItem>
    <template #icon>
      <ElIcon :size="28">
        <ScssIcon />
      </ElIcon>
    </template>
    <template #heading>SCSS</template>
    Since 2023
  </LineItem>

  <LineItem>
    <template #icon>
      <ElIcon :size="28"> <CourseraIcon /></ElIcon>
    </template>
    <template #heading>Lots of Coursera certificates</template>
    2021
  </LineItem>

  <LineItem>
    <template #icon>
      <ElIcon :size="28"> <HederaIcon /></ElIcon>
    </template>
    <template #heading>Hedera certificate</template>
    2023
  </LineItem>

  <LineItem>
    <template #icon>
      <ElIcon :size="28"> <ReactIcon /></ElIcon>
    </template>
    <template #heading>React</template>
    1 year of experience
  </LineItem>

  <LineItem>
    <template #icon>
      <ElIcon :size="28"> <NextIcon /></ElIcon>
    </template>
    <template #heading>Next</template>
    1 year of experience
  </LineItem>

  <LineItem>
    <template #icon>
      <ElIcon :size="28"> <PrismaIcon /></ElIcon>
    </template>
    <template #heading>Prisma</template>
    1 year of experience
  </LineItem>

  <LineItem>
    <template #icon>
      <ElIcon :size="28"> <SqlIcon /></ElIcon>
    </template>
    <template #heading>SQL - MySQL & PostreSQL</template>
    1 year of experience
  </LineItem>

  <LineItem>
    <template #icon>
      <ElIcon :size="28"> <MongoIcon /></ElIcon>
    </template>
    <template #heading>MongoDB</template>
    6 months of experience
  </LineItem>

  <LineItem>
    <template #icon>
      <ElIcon :size="28"> <PythonIcon /></ElIcon>
    </template>
    <template #heading>Python</template>
    3 months of experience
  </LineItem>

  <LineItem>
    <template #icon>
      <ElIcon :size="28"> <JavaIcon /></ElIcon>
    </template>
    <template #heading>Java</template>
    3 months of experience
  </LineItem>

  <LineItem>
    <template #icon>
      <ElIcon :size="28"> <CIcon /></ElIcon>
    </template>
    <template #heading>C++</template>
    3 months of experience
  </LineItem>

  <LineItem>
    <template #icon>
      <ElIcon :size="28"> <PhpIcon /></ElIcon>
    </template>
    <template #heading>PHP</template>
    3 months of experience
  </LineItem>

  <LineItem>
    <template #icon>
      <ElIcon :size="28"> <ExpressIcon /></ElIcon>
    </template>
    <template #heading>Express.js</template>
    3 months of experience
  </LineItem>

  <LineItem>
    <template #icon>
      <ElIcon :size="28"> <NestIcon /></ElIcon>
    </template>
    <template #heading>Nest.js</template>
    1 month of experience
  </LineItem>
</template>
