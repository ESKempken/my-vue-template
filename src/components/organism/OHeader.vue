<template>
  <div class="OHeader">
    <AText tag="h1" size="sm">my-vue-template</AText>

    <div data-device="mobile">
      <MNavHamburger />
    </div>

    <div data-device="desktop">
      <MNavPanel />
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import AText from '../atom/AText.vue'
  import MNavHamburger from '../molecule/MNavHamburger.vue'
  import MNavPanel from '../molecule/MNavPanel.vue'

  export default defineComponent({
    name: 'OHeader',

    components: {
      AText,
      MNavPanel,
      MNavHamburger
    }
  })
</script>

<style lang="sass">
  @use "../../assets/variables.sass" as *

  .OHeader
    padding: spacer("sm") spacer("lg")
    display: flex
    justify-content: space-between
    align-items: center

    @include breakpoint('md')
      padding: spacer("sm")

    [data-device="mobile"]
      display: none

    @include breakpoint('md')
      [data-device="mobile"]
        display: block

      [data-device="desktop"]
        display: none


</style>
