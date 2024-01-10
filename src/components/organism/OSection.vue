<template>
  <section
    :data-reverse="reverse"
    class="OSection"
  >
    <img
      :src="pngPath"
      alt="front view product shot"
      class="OSection__image"
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
  </section>
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
      },
      reverse: {
        type: Boolean,
        default: undefined
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
  @use "../../assets/variables.sass" as *

  .OSection
    display: flex
    justify-content: space-between
    gap: spacer("lg")
    padding-left: spacer("lg")
    padding-right: spacer("lg")
    outline: red solid 1px
    width: 100%

    &__content
      flex: 0 0 50%
      display: flex
      justify-content: center
      flex-direction: column

    &__image
      padding-left: spacer("lg")

    &[data-reverse]
      flex-direction: row-reverse

      .OSection__image
        padding-right: spacer("lg")

      .OSection__content
        padding-left: spacer("lg")

</style>
