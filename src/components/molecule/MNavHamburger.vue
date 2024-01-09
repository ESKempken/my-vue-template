<template>
  <div class="MNavHamburger">
    <AIcon
      name="menu"
      @click="toggleMenu()"
    />

    <aside :data-show="expanded">
      <AIcon
        name="close"
        @click="toggleMenu()"
      />

      <nav>
        <ElMenu>
          <template v-for="route in $router.options.routes">

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
  import AIcon from '../atom/AIcon.vue'

  export default defineComponent({
    name: 'MNavHamburger',
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
    components: { AIcon, ElMenuItem, ElMenu }
  })
</script>

<style lang="sass">
  .MNavHamburger

    [data-show="false"]
      display: none

    [data-show="true"]
      position: absolute
      top: 0
      right: 0
      height: 100%
      width: 300px
      background: lightgrey

      &[data-show]
        visibility: visible

</style>
