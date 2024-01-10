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

    --image-left: #{spacer("lg")}
    --image-right: auto
    --content-left: 0
    --content-right: 0

    @include breakpoint('md')
      flex-direction: column-reverse
      gap: spacer("md")

      .OSection__content, .OSection__image
        margin-left: auto
        margin-right: auto

        --image-left: 0
        --image-right: 0
        --content-left: 0
        --content-right: 0

      .OSection__content
        text-align: center
        gap: spacer("md")


    &[data-reverse]
      flex-direction: row-reverse
      --image-left: auto
      --image-right: #{spacer("lg")}
      --content-left: #{spacer("lg")}
      --content-right: auto

      @include breakpoint('md')
        // Specificity rewrite
        flex-direction: column-reverse

    &__content
      padding-left: var(--content-left)
      padding-right: var(--content-right)
      flex: 0 0 50%
      display: flex
      flex-direction: column
      gap: spacer("sm")
      justify-content: center

    &__image
      padding-left: var(--image-left)
      padding-right: var(--image-right)


</style>
