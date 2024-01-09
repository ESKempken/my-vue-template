<template>
  <hr class="ADivider"/>
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
    margin-left: 40px
    margin-right: 40px
    // FIXME

    @include breakpoint('sm')
      margin-left: 0
      margin-right: 0

</style>
