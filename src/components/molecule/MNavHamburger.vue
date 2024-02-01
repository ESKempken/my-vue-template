<template>
  <div class="MNavHamburger">
    <AButton
      size="xs"
      @click="toggleMenu()"
    >
      <AIcon name="menu" />
    </AButton>

    <aside
      :data-show="expanded"
      class="MNavHamburger__sidebar"
    >
      <AButton
        size="xs"
        @click="toggleMenu()"
      >
        <AIcon name="close" />
      </AButton>

      <nav>
        <ElMenu>
          <template
            v-for="route in $router.options.routes"
            :key="route.id"
          >
            <ElMenuItem>
              <router-link :to="route.path">
                {{ route.name }}
              </router-link>
            </ElMenuItem>
          </template>
        </ElMenu>
      </nav>
    </aside>
  </div>
</template>

<script lang="ts">
  import { ElMenu, ElMenuItem } from 'element-plus'
  import { defineComponent } from 'vue'
  import AButton from '../atom/AButton.vue'
  import AIcon from '../atom/AIcon.vue'

  export default defineComponent({
    name: 'MNavHamburger',
    components: { AButton, AIcon, ElMenuItem, ElMenu },
    data () {
      return {
        expanded: false
      }
    },
    methods: {
      toggleMenu () {
        this.expanded = !this.expanded
      }
    }
  })
</script>

<style lang="sass">
  @use "../../assets/variables.sass" as *

  .MNavHamburger

    &__sidebar
      position: absolute
      z-index: 2
      top: 0
      right: 0
      height: 100%
      background: $color-primary
      box-shadow: -10px 0px 10px 1px $color-dark


    [data-show="false"]
      display: none

    [data-show="true"]
      width: 300px

      &[data-show]
        visibility: visible

</style>
