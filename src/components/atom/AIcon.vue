<template>
  <img
    :src="svgPath"
    alt=""
    class="AIcon"
  >
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'AIcon',

    props: {
      name: {
        type: String,
        required: true
      }
    },

    computed: {
      svgPath () {
        return `src/assets/icons/${this.name}.svg`
      }
    }
  })
</script>

<style lang="sass">

</style>
