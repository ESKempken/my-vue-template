<template>
  <div class="OHeader">
    <div>
      logo
    </div>

    <div data-device="mobile">
      <MHamburgerMenu/>
    </div>

    <div data-device="desktop">
      <template v-for="route in $router.options.routes">
        <router-link :to="route.path">
          {{ route.name }}
        </router-link>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import MHamburgerMenu from '../molecule/MHamburgerMenu.vue'

  export default defineComponent({
    name: 'OHeader',

    components: {
      MHamburgerMenu
    }
  })
</script>

<style lang="sass">
  @use "../../assets/variables.sass" as *

  .OHeader
    height: 156px
    padding-left: 90px
    padding-right: 90px
    display: flex
    justify-content: space-between
    align-items: center

    [data-device="mobile"]
      display: none

    @include breakpoint('sm')
      [data-device="mobile"]
        display: block

      [data-device="desktop"]
        display: none


</style>
