<template>
  <section class="OHero">
    <span class="OHero__background" />

    <div class="OHero__layout">
      <div class="OHero__content">
        <div class="OHero__text">
          <AText
            tag="h3"
            weight="bold"
          >
            Food app
          </AText>

          <AText
            class="OHero__title"
            font="Poppins"
            size="xl"
            tag="h1"
          >
            Why stay hungry when you can order form Bella Onojie
          </AText>

          <AText
            tag="p"
          >
            Download the bella onoje’s food app now on
          </AText>
        </div>

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
  </section>
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
    position: relative
    width: 100%

    &__layout
      display: flex
      justify-content: center
      position: relative

    &__background
      position: absolute
      width: 100vw
      background: url('../../assets/hero.png') no-repeat center center
      background-size: cover
      height: 700px

      @include breakpoint('lg')
        height: 620px

      @include breakpoint('md')
        display: none


    &__text
      margin-top: spacer("lg")
      display: flex
      flex-direction: column
      align-items: center
      text-align: center
      color: $color-tertiary

      @include breakpoint('md')
        color: $color-secondary

      > h1
        margin-bottom: 27px

      > h3
        margin-bottom: 17px

      > p
        margin-bottom: 54px

    &__content
      max-width: 940px
      display: flex
      flex-direction: column
      gap: spacer("md")
      align-items: center


    &__action
      display: flex
      gap: spacer("md")

    &__button
      display: flex
      justify-content: center
      width: 236px


</style>
