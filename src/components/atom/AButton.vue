<template>
  <Component
    :is="tag"
    :data-background="background"
    :data-color="color"
    :data-outline="outline"
    :data-rounded="rounded"
    :href="href"
    class="AButton"
  >
    <AText
      :size="size"
      :weight="weight"
    >
      {{ $props.label }}
    </AText>
  </Component>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import AText from './AText.vue'

  export default defineComponent({
    name: 'AButton',
    components: { AText },

    setup (props) {
      return {
        tag: props.href ? 'a' : 'button'
      }
    },

    props: {
      label: {
        type: String,
        default: undefined
      },

      href: {
        type: String,
        default: undefined
      },

      rounded: {
        type: Boolean,
        default: undefined
      },

      size: {
        type: String,
        default: undefined
      },

      color: {
        type: String,
        default: 'tertiary'
      },

      background: {
        type: String,
        default: 'primary'
      },

      weight: {
        type: String,
        default: undefined
      }
    }
  })
</script>

<style lang="sass">
  @use "../../assets/variables.sass" as *

  .AButton
    border-radius: 10px
    cursor: pointer
    padding: 18px

    @each $name, $color in $colors
      &[data-background="#{$name}"]
        background-color: #{$color}

      &[data-color="#{$name}"]
        color: #{$color}

    &:not([data-background])
      border: 1px solid $color-tertiary
      background-color: transparent

    &[data-rounded="true"]
      border-radius: 999px
      padding: 16px

    &:is(a)
      text-decoration: none

</style>
