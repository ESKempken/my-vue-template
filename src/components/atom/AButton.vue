<template>
  <Component
    :is="tag"
    :data-background="background"
    :data-color="color"
    :data-size="size"
    :href="href"
    class="AButton"
  >
    <slot/>

    <template v-if="$props.label">
      <AText>
        {{ $props.label }}
      </AText>
    </template>
  </Component>
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue'
  import AText from './AText.vue'

  import type { OptionsColor, OptionsSize } from '../../assets/types.ts'

  export default defineComponent({
    name: 'AButton',
    components: { AText },

    props: {
      label: {
        type: String,
        default: undefined
      },

      href: {
        type: String,
        default: undefined
      },

      size: {
        type: String as PropType<OptionsSize>,
        default: undefined
      },

      color: {
        type: String,
        default: 'white'
      },

      background: {
        type: String as PropType<OptionsColor>,
        default: 'primary'
      }
    },

    setup (props) {
      return {
        tag: props.href ? 'a' : 'button'
      }
    }
  })
</script>

<style lang="sass">
  @use "../../assets/variables.sass" as *

  .AButton
    border-radius: 10px
    cursor: pointer

    @each $name, $spacer in $spacers
      &[data-size="#{$name}"]
        padding: #{$spacer}

    @each $name, $color in $colors
      &[data-background="#{$name}"]
        background-color: #{$color}

      &[data-color="#{$name}"]
        color: #{$color}

    &:is(a)
      text-decoration: none

    &:hover,
    &:focus-visible,
    &:active
      transform: scale(1.1)

</style>
