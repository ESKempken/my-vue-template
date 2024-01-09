<template>
  <Component
    :is="tag"
    :data-color="color"
    :data-size="size"
    :data-weight="weight"
    class="QText"
  >
    <slot/>
  </Component>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'AText',

    props: {
      tag: {
        type: String,
        default: 'span'
      },

      size: {
        type: [String, null],
        default: 'md'
      },

      weight: {
        type: String,
        default: null
      },

      color: {
        type: String,
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

    $options-weight: 500, 700
    // FIXME

    @each $weight in $options-weight
      &[data-weight="#{$weight}"]
        font-weight: $weight

</style>
