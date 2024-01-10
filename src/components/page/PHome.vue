<template>
  <div class="PHome">
    <OHero />

    <MSectionBreak title="How the app works" />

    <OSection
      description="An account is created with your email and a desired password"
      img-name="product-3"
      subtitle="Create an account"
      title="Create/login to an existing account to get started"
    />

    <OSection
      description="An account is created with your email and a desired password"
      img-name="product-3"
      reverse
      subtitle="Create an account"
      title="Create/login to an existing account to get started"
    />

    <footer>
      footer
    </footer>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import ADivider from '../atom/ADivider.vue'
  import AText from '../atom/AText.vue'
  import MSectionBreak from '../molecule/MSectionBreak.vue'
  import OHero from '../organism/OHero.vue'
  import OSection from '../organism/OSection.vue'

  export default defineComponent({
    components: { MSectionBreak, OSection, ADivider, AText, OHero }
  })
</script>

<style lang="sass">
  @use "../../assets/variables.sass" as *

  .PHome
    display: flex
    flex-direction: column
    align-items: center
    gap: spacer("xl")

</style>
