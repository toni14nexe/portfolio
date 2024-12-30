<script setup>
import PersonalInfoIcon from '@/assets/icons/PersonalInfoIcon.vue'
import EarlyYearsIcon from '@/assets/icons/EarlyYearsIcon.vue'
import EducationIcon from '@/assets/icons/EducationIcon.vue'
import ProfessionalExperienceIcon from '@/assets/icons/ProfessionalExperienceIcon.vue'
import PrivateProjectsIcon from '@/assets/icons/PrivateProjectsIcon.vue'
import PersonalQualitiesIcon from '@/assets/icons/PersonalQualitiesIcon.vue'
import CertificatesIcon from '@/assets/icons/CertificatesIcon.vue'
</script>

<template>
  <div class="about-container">
    <div class="paragraph-wrapper">
      <div class="title-wrapper">
        <ElIcon :size="28"><PersonalInfoIcon color="white" /></ElIcon>
        <h2 class="color-white">Personal Information</h2>
      </div>
      <div>
        <p>
          <span class="color-white">Name: Toni Kolarić</span>
          <br />
          <span class="color-white">Place of Birth: Našice, Croatia</span>
          <br />
          <span class="color-white">Residence: Martin, Našice, Croatia</span>
          <br />
          <span class="color-white">Current Position: Frontend Developer at Barrage d.o.o.</span>
          <br />
          Professional developer since 2021
        </p>
      </div>
    </div>

    <div class="paragraph-wrapper">
      <div class="title-wrapper">
        <ElIcon :size="28"><EarlyYearsIcon color="white" /></ElIcon>
        <h2 class="color-white">Early Years</h2>
      </div>
      <p>
        I was born in Našice, a charming small town in eastern Croatia near Osijek. From an early
        age, I displayed a deep interest in technology, fueled by an innate curiosity about how
        things work and a passion for problem-solving.
      </p>
    </div>

    <div class="paragraph-wrapper">
      <div class="title-wrapper">
        <ElIcon :size="28"><EducationIcon color="white" /></ElIcon>
        <h2 class="color-white">Education</h2>
      </div>
      <p>
        <span class="color-white">Primary School: Dora Pejačević Elementary School, Našice</span>
        <br />
        I completed all eight years of primary education with top honors, consistently excelling in
        my studies and demonstrating a strong affinity for computers and technology.
        <br /><br />
        <span class="color-white">Secondary School: Isidor Kršnjavi High School, Našice</span>
        <br />
        I pursued an education in electrical engineering, a natural choice given my interest in
        technology. During these years, I honed my skills by working at a local computer shop during
        the summers. My responsibilities included assembling and repairing computers, laptops, and
        mobile devices, as well as dabbling in programming fundamentals.
        <br /><br />
        <span class="color-white">
          Higher Education: Faculty of Electrical Engineering, Computer Science and Information
          Technology (FERIT), Osijek
        </span>
        <br />
        While working as a waiter in Našice’s most renowned pub, I enrolled in the computer science
        program at FERIT. This marked the start of my formal journey into the IT world, where I
        successfully earned the title of bacc. ing. comp. (Bachelor of Computer Engineering).
      </p>
    </div>

    <div class="paragraph-wrapper">
      <div class="title-wrapper">
        <ElIcon :size="28"><ProfessionalExperienceIcon color="white" /></ElIcon>
        <h2 class="color-white">Professional Experience</h2>
      </div>
      <p>
        <span class="color-white">Frontend Developer - Barrage d.o.o., Osijek</span>
        <br />
        Full-time role during studies and post-graduation: 2021 - still working
        <br />
        I joined Barrage as a frontend developer, primarily working with Vue.js and Nuxt.js. My role
        also extended to projects involving React and Next.js, providing valuable exposure to
        cutting-edge web development frameworks.
        <br />
        During my tenure at Barrage, I contributed to numerous high-impact projects, including:
        <br />
        <span class="color-white">- OneHub:</span> A collaborative project for T-Com, the leading
        telecom provider in Croatia, in partnership with Deutsche Telekom.
        <br />
        <span class="color-white">- Travelspot:</span> A unique brand under Barrage’s portfolio,
        showcasing innovative and scalable web solutions for business traveling. Beyond my primary
        responsibilities, I have consistently sought opportunities to enhance my skills, delve into
        new technologies, and contribute to both company and personal projects.
        <br />
        You can check my other projects
        <RouterLink to="/projects"> here. </RouterLink>
      </p>
    </div>

    <div class="paragraph-wrapper">
      <div class="title-wrapper">
        <ElIcon :size="28"><PrivateProjectsIcon color="white" /></ElIcon>
        <h2 class="color-white">Private Projects</h2>
      </div>
      <p>
        Throughout my academic and professional career, I have been deeply committed to private
        initiatives that allowed me to realize personal and external ideas while refining my
        technical skills. These projects solidified my expertise as a full-stack developer with
        proficiency in:
        <br />
        <span class="color-white">- Frontend:</span> Vue.js, Nuxt.js, React, Next.js...
        <br />
        <span class="color-white">- Backend:</span> Node.js, Express.js, Nest.js, Nuxt.js,
        Next.js...
        <br />
        <span class="color-white">- Databases:</span> Prisma, PostgreSQL, MySQL, MongoDB...
      </p>
    </div>

    <div class="paragraph-wrapper">
      <div class="title-wrapper">
        <ElIcon :size="28"><PersonalQualitiesIcon color="white" /></ElIcon>
        <h2 class="color-white">Personal Qualities</h2>
      </div>
      <p>
        I am a highly ambitious and dedicated individual who thrives on challenges and constantly
        seeks opportunities to grow. I take pride in my ability to meet deadlines, learn new
        languages and frameworks, and push the boundaries of what I can achieve. Whether as part of
        a team or independently, I bring enthusiasm, reliability, and a results-driven mindset to
        every task.
        <br /><br />
        I am eager to leverage my skills and passion for technology to make meaningful
        contributions, achieve organizational goals, and continue advancing in the ever-evolving
        world of IT.
      </p>
    </div>

    <div class="paragraph-wrapper">
      <div class="title-wrapper">
        <ElIcon :size="28"><CertificatesIcon color="white" /></ElIcon>
        <h2 class="color-white">Certificates</h2>
      </div>
      <p>
        - Hedera certificate - Hedera 2023 <br />- Test Driven Development in Java for Beginners -
        Coursera 2021 <br />- Software Processes and Agile Practices - Coursera 2021 <br />-
        Software Development Processes and Methodologies - Coursera 2021 <br />- Software
        Architecture - Coursera 2021 <br />- Service-oriented Architecture - Coursera 2021 <br />-
        Server-side Development with NodeJS, Express and MongoDB - Coursera 2021 <br />- Programming
        Foundations with JavaScript, HTML - Coursera 2021 <br />- Object-Oriented Design - Coursera
        2021 <br />- Linux Commands Shell Scripting Essentials - Coursera 2021 <br />- Linux
        Fundamentals - Coursera 2021 <br />- Lean Software Development - Coursera 2021 <br />-
        Kubernetes Basic Architecture and First - Coursera 2021 <br />- Java Programming Solving
        Problems with Software - Coursera 2021 <br />- Java Programming Principles of Software
        Design - Coursera 2021 <br />- Java Programming Build a Recommendation System - Coursera
        2021 <br />- Java Programming Arrays, Lists, and Structured Data - Coursera 2021 <br />-
        Introduction to Unit Testing in Jest - The Fundametals - Coursera 2021 <br />- Introduction
        to Test Driven Development - Coursera 2021 <br />- Introduction to MongoDB - Coursera 2021
        <br />- Introduction to Git and GitHub - Coursera 2021 <br />- Hands-on Introduction to
        Linux Commands and - Coursera 2021 <br />- Front-End Web UI Frameworks and Tools Bootstrap 4
        - Coursera 2021 <br />- Front-End Web Development with React - Coursera 2021 <br />-
        Engineering Practices for Building Quality - Coursera 2021 <br />- Docker for absolute
        beginners - Coursera 2021 <br />- Design Patterns - Coursera 2021 <br />- Database Design
        and Basic SQL in PostgreSQL - Coursera 2021 <br />- Client Needs and Software Requirements -
        Coursera 2021 <br />- C for Everyone Programming Fundamentals - Coursera 2021 <br />-
        Beginners Guide to YAML Syntax - Coursera 2021 <br />- Agile Software Development - Coursera
        2021 <br />- A Practical Introduction to Test-Driven - Coursera 2021
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
</style>
