<template>
  <div class="user">
    <div class="search">
      <w-sform v-bind="formConfig" v-model="formData"></w-sform>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import WSform from '@/base-ui/form/index'
import { formConfig } from './config/search.config'

export default defineComponent({
  name: 'UseR',
  components: { WSform },
  setup() {
    const formData = ref({
      id: '',
      name: '',
      password: '',
      sport: '',
      createTime: ''
    })
    return { formConfig, formData }
  }
})
</script>

<style scoped></style>
