<template>
  <div class="PHome">
   <AText tag="h2" size="md">
     PHome
   </AText>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import AText from '../atom/AText.vue'

  export default defineComponent({
    components: { AText }
  })
</script>

<style lang="sass">
  @use "../../assets/variables.sass" as *

  .PHome
    position: relative
    background: $color-light

</style>
