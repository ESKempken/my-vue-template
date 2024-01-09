<template>
  <div class="OHeader">
    <img
      alt="logo"
      class="OHeader__logo"
      src="../../assets/logo.png"
    >

    <div data-device="mobile">
      <MNavHamburger/>
    </div>

    <div data-device="desktop">
      <MNavPanel/>
    </div>

  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import MNavHamburger from '../molecule/MNavHamburger.vue'
  import MNavPanel from '../molecule/MNavPanel.vue'

  export default defineComponent({
    name: 'OHeader',

    components: {
      MNavPanel,
      MNavHamburger
    }
  })
</script>

<style lang="sass">
  @use "../../assets/variables.sass" as *

  .OHeader
    padding: 26px 40px 26px 90px
    display: flex
    justify-content: space-between
    align-items: center

    @include breakpoint('sm')
      padding: 16px 17px

    &__logo
      height: 100px

      @include breakpoint('sm')
        height: 50px

    [data-device="mobile"]
      display: none

    @include breakpoint('sm')
      [data-device="mobile"]
        display: block

      [data-device="desktop"]
        display: none


</style>
