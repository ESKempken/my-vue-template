<template>
  <div class="OSection">
    <img
      :src="pngPath"
      alt="front view product shot"
    >

    <div class="OSection__content">
      <AText weight="700">
        {{ $props.subtitle }}
      </AText>
      <AText size="lg">
        {{ $props.title }}
      </AText>
      <AText>
        {{ $props.description }}
      </AText>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import AText from '../atom/AText.vue'

  export default defineComponent({
    name: 'OSection',
    components: { AText },

    props: {
      subtitle: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      imgName: {
        type: String,
        required: true
      }
    },

    computed: {
      pngPath () {
        return `src/assets/${this.imgName}.png`
      }
    }
  })
</script>

<style lang="sass">
  .OSection
    display: flex

</style>
