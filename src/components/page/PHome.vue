<template>
  <div class="PHome">
    <!-- FIXME -->
    <!--    <section style="width: 100%; height: 1200px;">-->
    <!--      <OHero/>-->
    <!--    </section>-->

    <div class="PHome__subtitle">
      <ADivider />

      <AText
        color="dark"
        size="xl"
        tag="h2"
        weight="600"
      >
        How the app works
      </AText>
    </div>

    <section>
      <OSection
        description="An account is created with your email and a desired password"
        img-name="product-3"
        subtitle="Create an account"
        title="Create/login to an existing account to get started"
      />
    </section>

    <footer>
      footer
    </footer>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import ADivider from '../atom/ADivider.vue'
  import AText from '../atom/AText.vue'
  import OHero from '../organism/OHero.vue'
  import OSection from '../organism/OSection.vue'

  export default defineComponent({
    components: { OSection, ADivider, AText, OHero }
  })
</script>

<style lang="sass">
  @use "../../assets/variables.sass" as *

  .PHome
    display: flex
    flex-direction: column
    align-items: center

    &__subtitle
      width: 100%
      text-align: center
      display: flex
      flex-direction: column
      gap: 72px

      @include breakpoint('sm')
        flex-direction: column-reverse
        gap: 49px

</style>
