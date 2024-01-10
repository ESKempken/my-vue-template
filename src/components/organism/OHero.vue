<template>
  <section class="OHero">
    <div class="OHero__content">
      <div class="OHero__text">
        <AText
          size="md"
          tag="h3"
          weight="bold"
        >
          Food app
        </AText>

        <AText
          class="OHero__title"
          font="Poppins"
          tag="h1"
        >
          Why stay hungry when you can order form Bella Onojie
        </AText>

        <AText
          size="md"
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
        class="OHero__image"
        src="../../assets/hero-product.png"
      >
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
    display: flex
    justify-content: center
    position: relative

    &__text
      padding-left: spacer("sm")
      padding-right: spacer("sm")
      margin-top: spacer("lg")
      display: flex
      flex-direction: column
      align-items: center
      text-align: center
      color: $color-white

      > h3
        margin-bottom: 17px
        color: $color-light

      > h1
        margin-bottom: 27px
        font-size: map-get($font-size, "xl")

      > p
        margin-bottom: 54px

      @include breakpoint('md')
        > h1
          color: $color-secondary
          font-size: map-get($font-size, "lg")

        > h3, p
          color: $color-dark


    &__content
      max-width: 940px
      display: flex
      flex-direction: column
      gap: spacer("md")
      align-items: center

    &__image
      max-width: 100%

    &__action
      display: flex
      gap: spacer("md")

      @include breakpoint('md')
        flex-direction: column

        .OHero__button:last-child
          border-color: $color-primary
          color: $color-primary

    &__button
      display: flex
      justify-content: center
      width: 236px


</style>
