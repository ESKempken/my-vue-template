<template>
  <div class="OHero">
    <span class="OHero__background" />

    <div class="OHero__content">
      <AText
        tag="h3"
        weight="bold"
      >
        Food app
      </AText>

      <AText
        class="OHero__title"
        size="xxl"
        tag="h1"
      >
        Why stay hungry when you can order form Bella Onojie
      </AText>

      <AText
        tag="p"
      >
        Download the bella onoje’s food app now on
      </AText>

      <div class="OHero__action">
        <AButton
          class="OHero__button"
          href="#"
          label="Playstore"
          rounded
          weight="700"
        />

        <AButton
          :background="null"
          class="OHero__button"
          href="#"
          label="App store"
          rounded
          weight="700"
        />
      </div>

      <img
        alt="product shot one"
        class="OHeader__product"
        src="../../assets/hero-product.png"
      >
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import AButton from '../atom/AButton.vue'
  import AText from '../atom/AText.vue'

  export default defineComponent({
    name: 'OHero',
    components: { AButton, AText }
  })
</script>

<style lang="sass">
  @use "../../assets/variables.sass" as *

  .OHero
    display: flex
    justify-content: center
    position: relative

    // FIXME zero height vs stack problem
    &__background
      position: absolute
      top: 0
      width: 100%
      height: 560px
      background: url('../../assets/hero.png') no-repeat center center
      background-size: cover

      @include breakpoint('md')
        display: none


    &__content
      position: absolute
      max-width: 940px
      display: flex
      flex-direction: column
      align-items: center
      gap: 10px
      color: $color-tertiary

      @include breakpoint('md')
        color: $color-secondary

      > h1
        text-align: center
        margin-bottom: 27px

      > h3
        margin-top: 73px
        margin-bottom: 17px

      > p
        margin-bottom: 54px

    &__action
      overflow: hidden
      min-height: fit-content
      display: flex
      gap: 34px

    &__button
      display: flex
      justify-content: center
      width: 236px


</style>
