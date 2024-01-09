<template>
  <div class="OHero">
    <div class="OHero__content">
      <AText
        color="tertiary"
        tag="h3"
        weight="bold"
      >
        Food app
      </AText>

      <AText
        class="OHero__title"
        color="tertiary"
        size="xxl"
        tag="h1"
      >
        Why stay hungry when you can order form Bella Onojie
      </AText>

      <AText
        color="tertiary"
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
  .OHero
    background: #252b42

    &__title
      text-align: center

    &__content
      padding-top: 73px
      display: flex
      flex-direction: column
      align-items: center
      gap: 10px

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
