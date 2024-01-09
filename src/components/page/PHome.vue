<template>
  <div>
    <section>
      <OHero/>
    </section>

    How the app works

    <section>

    </section>

    <footer>
      footer
    </footer>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import OHero from '../organism/OHero.vue'

  export default defineComponent({
    components: { OHero }
  })
</script>

<style lang="sass">

</style>
