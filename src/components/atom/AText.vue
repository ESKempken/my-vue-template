<template>
  <Component
    :is="tag"
    :data-color="color"
    :data-font="font"
    :data-size="size"
    :data-weight="weight"
    class="QText"
  >
    <slot/>
  </Component>
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue'

  type FontOptions = 'Poppins' | 'Montserrat'

  export default defineComponent({
    name: 'AText',

    props: {
      tag: {
        type: String,
        default: 'span'
      },

      size: {
        type: String,
        default: 'md'
      },

      weight: {
        type: String,
        default: null
      },

      color: {
        type: String,
        default: null
      },

      font: {
        type: String as PropType<FontOptions>,
        default: null
      }
    }
  })
</script>

<style lang="sass">
  @use "src/assets/variables.sass" as *

  .QText
    margin-bottom: 0

    @each $name, $size in $font-size
      &[data-size="#{$name}"]
        font-size: #{$size}

    @each $name, $color in $colors
      &[data-color="#{$name}"]
        color: #{$color}

    $options-weight: 500, 600, 700

    @each $weight in $options-weight
      &[data-weight="#{$weight}"]
        font-weight: $weight

    $options-font: 'Montserrat', 'Poppins'

    @each $font in $options-font
      &[data-font="#{$font}"]
        font-family: $font, 'sans-serif'

</style>
