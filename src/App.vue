<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  components: {},
  props: {
    name: {
      type: String,
      default: 'asaa'
    }
  },
  setup(props) {}
})
</script>

<style lang="less">
.app {
  height: 100%;
}
</style>
