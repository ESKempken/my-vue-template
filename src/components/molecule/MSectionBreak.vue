<template>
  <div class="MSectionBreak">
    <ADivider class="MSectionBreak__divider" />

    <AText
      class="MSectionBreak__title"
      color="black"
      font="Poppins"
      tag="h2"
      weight="600"
    >
      {{ $props.title }}
    </AText>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import ADivider from '../atom/ADivider.vue'
  import AText from '../atom/AText.vue'

  export default defineComponent({
    name: 'MSectionBreak',
    components: { AText, ADivider },
    props: {
      title: {
        type: String,
        required: true
      }
    }
  })
</script>

<style lang="sass">
  @use "../../assets/variables.sass" as *

  .MSectionBreak
    width: 100%
    text-align: center
    display: flex
    flex-direction: column
    gap: 72px
    padding-left: spacer("lg")
    padding-right: spacer("lg")

    @include breakpoint('sm')
      padding-left: 0
      padding-right: 0
      flex-direction: column-reverse
      gap: 49px

    &__title
      font-size: map-get($font-size, "lg")
      padding-left: spacer("sm")
      padding-right: spacer("sm")

      @include breakpoint('sm')
        font-size: map-get($font-size, "md")


    &__divider
      margin-left: spacer("lg")
      margin-right: spacer("lg")

      @include breakpoint('lg')
        margin-left: 0
        margin-right: 0

</style>
