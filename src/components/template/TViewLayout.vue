<template>
  <div class="TViewLayout">

    <nav>
      <OHeader/>
    </nav>

    <main class="TViewLayout__content">
      <slot/>
    </main>
  </div>
</template>

<script lang="ts">
  import OHeader from '../organism/OHeader.vue'
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'TViewLayout',

    components: {
      OHeader
    }
  })
</script>

<style lang="sass">
  @use "../../assets/variables.sass" as *

  .TViewLayout
    display: flex
    flex-direction: column
    height: 100vh
    position: relative
</style>
