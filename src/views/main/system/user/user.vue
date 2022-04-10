<template>
  <div class="user">
    <div class="search">
      <w-sform v-bind="formConfig"></w-sform>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import WSform, { IForm } from '@/base-ui/form/index'
import { formConfig } from './config/search.config'

export default defineComponent({
  name: 'UseR',
  components: { WSform },
  setup() {
    return { formConfig }
  }
})
</script>

<style scoped></style>
