<template>
  <hr class="ADivider">
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'ADivider'
  })
</script>

<style lang="sass">
  @use "../../assets/variables.sass" as *

  .ADivider
    border-bottom: 3px solid $color-light

</style>
