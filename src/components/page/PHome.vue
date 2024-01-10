<template>
  <div class="PHome">
    <span class="PHome__backplate" />

    <div class="PHome__contain">
      <OHero />

      <MSectionBreak title="How the app works" />

      <OSection
        description="An account is created with your email and a desired password"
        img-name="product-3"
        reverse
        subtitle="Create an account"
        title="Create/login to an existing account to get started"
      />

      <OSection
        description="An account is created with your email and a desired password"
        img-name="product-3"
        subtitle="Create an account"
        title="Create/login to an existing account to get started"
      />
    </div>

    <footer>
      footer
    </footer>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import MSectionBreak from '../molecule/MSectionBreak.vue'
  import OHero from '../organism/OHero.vue'
  import OSection from '../organism/OSection.vue'

  export default defineComponent({
    components: { MSectionBreak, OSection, OHero }
  })
</script>

<style lang="sass">
  @use "../../assets/variables.sass" as *

  .PHome
    position: relative
    overflow: hidden

    &__contain
      display: flex
      flex-direction: column
      align-items: center
      gap: spacer("xl")


    &__backplate
      position: absolute
      width: 100vw
      background: url('../../assets/hero.png') no-repeat center center
      background-size: cover
      height: 700px

      @include breakpoint('lg')
        height: 620px

      @include breakpoint('md')
        display: none


</style>
