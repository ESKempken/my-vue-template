<template>
  <TViewLayout>
    <RouterView/>
  </TViewLayout>
</template>

<script
  lang="ts"
  setup
>
  import TViewLayout from './components/template/TViewLayout.vue'
</script>


<style lang="sass">
  @use "./assets/variables.sass" as *

  body
    margin: 0
    background-color: $color-page

</style>
