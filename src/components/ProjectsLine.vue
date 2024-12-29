<script setup>
import LineItem from './LineItem.vue'
import TcomIcon from '@/assets/icons/TcomIcon.vue'
import TravelspotIcon from '@/assets/icons/TravelspotIcon.vue'
import RoangoIcon from '@/assets/icons/RoangoIcon.vue'
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
</script>

<template>
  <LineItem href="https://www.hrvatskitelekom.hr">
    <template #icon>
      <ElIcon :size="28">
        <TcomIcon />
      </ElIcon>
    </template>
    <template #heading> T-com OneHub </template>
    Application of the leading Croatian telecom operator in cooperation with Deutsche Telekom, which
    unites 11 different business-user services into one - company, still developing
  </LineItem>

  <LineItem href="https://www.travelspot.com">
    <template #icon>
      <ElIcon :size="28">
        <TravelspotIcon />
      </ElIcon>
    </template>
    <template #heading> Travelspot </template>
    an application for the complete organization of a business trip with transportation,
    accommodation and other key things related to the trip - company
  </LineItem>

  <LineItem href="https://www.roango.com">
    <template #icon>
      <ElIcon :size="28">
        <RoangoIcon />
      </ElIcon>
    </template>
    <template #heading> Roango </template>
    An application for searching for talents & jobs, and compiling works - company
  </LineItem>

  <LineItem href="https://expertise-application-expertise-web-development.guja.barrage.corp">
    <template #icon>
      <ElIcon :size="28">
        <SkillIcon />
      </ElIcon>
    </template>
    <template #heading> Expertise </template>
    An application for managing skills and faster finding workers with certain skills. It is also
    possible to reward each other with Hedera coins - company, access requires VPN
  </LineItem>

  <LineItem href="https://agro-application.netlify.app">
    <template #icon>
      <ElIcon :size="28">
        <AgroAppIcon />
      </ElIcon>
    </template>
    <template #heading> AgroApp </template>
    An application that includes keeping books, papers and records for all branches of agronomy (16
    of them) in accordance with Croatian laws, and exporting and printing them - private, still
    develpoing
  </LineItem>

  <LineItem href="https://github.com/toni14nexe/wedding_template">
    <template #icon>
      <ElIcon :size="28">
        <WeddingAppIcon />
      </ElIcon>
    </template>
    <template #heading> Wedding Application </template>
    An application intended to be used as a wedding invitation and later for uploading official and
    unofficial images. Private images of wedding guests can be uploaded via a specific QR code or
    from the side of the administrator (photo staff or newlyweds) - private, still develpoing, not
    deployed yet
  </LineItem>

  <LineItem href="https://sveta-knjiga.netlify.app/">
    <template #icon>
      <ElIcon :size="28">
        <SvetaKnjigaIcon />
      </ElIcon>
    </template>
    <template #heading> Sveta Knjiga </template>
    Application that was made to manage debts in a handball club - private, need some time to start
    backend server
  </LineItem>

  <LineItem href="https://studentski.netlify.app/">
    <template #icon>
      <ElIcon :size="28">
        <StudentskiPonedjeljakIcon />
      </ElIcon>
    </template>
    <template #heading> Studentski Ponedjeljak </template>
    An application that is made for society. To manage arrivals, laws and members - private
  </LineItem>

  <LineItem href="https://stunning-gumption-a4b1f6.netlify.app">
    <template #icon>
      <ElIcon :size="28">
        <AffiliateMarketingIcon />
      </ElIcon>
    </template>
    <template #heading> Affiliate Marketing </template>
    Application for creating your own online affiliate web shop with adding categories and
    subcategories and with automatic loading of product data from the affiliate link - private, not
    maintained for a long time
  </LineItem>

  <LineItem href="https://starlit-treacle-8c8798.netlify.app">
    <template #icon>
      <ElIcon :size="28">
        <PokemonIcon />
      </ElIcon>
    </template>
    <template #heading> Pokemons </template>
    Pokemon name guesser trial app - private
  </LineItem>

  <LineItem href="https://tiny-cascaron-845002.netlify.app">
    <template #icon>
      <ElIcon :size="28">
        <PurpleHatIcon />
      </ElIcon>
    </template>
    <template #heading> The Purple Hat </template>
    Application for ordering food and drinks inside the restaurant with registration by scanning the
    QR code from the table. Waiters can also keep a live order status - private, not maintained
  </LineItem>

  <LineItem href="https://app.netlify.com/sites/ephemeral-cat-833154/overvie">
    <template #icon>
      <ElIcon :size="28">
        <ChineseFoodIcon />
      </ElIcon>
    </template>
    <template #heading> Chinese Food </template>
    Test application for ordering food and drinks inside the restaurant - private, not maintained,
    one of my first apps
  </LineItem>

  <LineItem href="https://github.com/toni14nexe?tab=repositories">
    <template #icon>
      <ElIcon :size="28">
        <GitHubIcon />
      </ElIcon>
    </template>
    <template #heading> GitHub repository </template>
    Other applications are available on my GitHub account
  </LineItem>
</template>
