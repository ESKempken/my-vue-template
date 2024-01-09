<template>
  <div class="MHamburgerMenu">
    <i @click="toggleMenu()">
      Hamburger icon
    </i>

    <aside :data-show="expanded">
      <i
        class="MHamburgerMenu__close"
        @click="toggleMenu()"
      >
        close
      </i>

      <ElMenu>
        <template v-for="route in $router.options.routes">

          <ElMenuItem>
            <router-link :to="route.path">
              {{ route.name }}
            </router-link>
          </ElMenuItem>
          <ElMenuItem/>

        </template>
      </ElMenu>

    </aside>


  </div>
</template>

<script lang="ts">
  import { ElMenu, ElMenuItem } from 'element-plus'
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'MHamburgerMenu',
    data () {
      return {
        expanded: false
      }
    },
    methods: {
      toggleMenu () {
        this.expanded = !this.expanded
      }
    },
    components: { ElMenuItem, ElMenu }
  })
</script>

<style lang="sass">
  .MHamburgerMenu

    [data-show="false"]
      display: none

    [data-show="true"]
      position: absolute
      top: 0
      right: 0
      height: 100%
      width: 300px
      background: red

      &[data-show]
        visibility: visible

</style>
