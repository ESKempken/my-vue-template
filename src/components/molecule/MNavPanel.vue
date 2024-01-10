<template>
  <nav class="MNavPanel">

    <template v-for="route in $router.options.routes">
      <router-link
        :to="route.path"
        class="MNavPanel__button"
      >
        <AText
          :data-active="isActive(route.path)"
          class="MNavPanel__label"
          size="sm"
          tag="h3"
          weight="600"
        >
          {{ route.name }}
        </AText>
      </router-link>
    </template>
  </nav>

</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import AText from '../atom/AText.vue'

  export default defineComponent({
    name: 'MNavPanel',
    components: { AText },

    methods: {
      isActive (path: string) {
        return this.$route.path === path
      }
    }
  })
</script>

<style lang="sass">
  @use "../../assets/variables.sass" as *

  .MNavPanel
    display: flex
    gap: spacer("lg")

    &__button
      padding: 10px

    &__label
      text-transform: capitalize

      &[data-active="true"]
        color: $color-primary


</style>
