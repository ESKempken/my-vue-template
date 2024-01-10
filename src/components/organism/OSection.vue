<template>
  <section
    :data-reverse="reverse"
    class="OSection"
  >
    <div class="OSection__content">
      <AText
        color="primary"
        size="md"
        weight="700"
      >
        {{ $props.subtitle }}
      </AText>
      <AText
        color="secondary"
        size="lg"
        weight="700"
      >
        {{ $props.title }}
      </AText>
      <AText
        color="dark"
        size="md"
      >
        {{ $props.description }}
      </AText>
    </div>

    <img
      :src="pngPath"
      alt="front view product shot"
      class="OSection__image"
    >
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
    width: 100%

    &[data-reverse]
      flex-direction: row-reverse

    @include breakpoint('md')
      padding-left: spacer("md")
      padding-right: spacer("md")
      flex-direction: column !important
      //FIXME Specificity data attr

      .OSection__content, .OSection__image
        padding-left: 0
        padding-right: 0

      .OSection__content
        text-align: center
        gap: spacer("md")

    &__content
      flex: 0 0 50%
      display: flex
      gap: spacer("sm")
      justify-content: center
      flex-direction: column
      padding-left: spacer("lg")

    &__image
      padding-left: spacer("lg")
      padding-right: spacer("lg")


</style>
