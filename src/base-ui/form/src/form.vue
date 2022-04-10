<template>
  <div class="WsForm">
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <el-form-item :label="item.label" :rules="item.rules" :style="itemStyle">
              <template v-if="item.type === 'input' || item.type === 'password'">
                <el-input
                  v-model="formData[`${item.field}`]"
                  :placeholder="item.palaceholder"
                  :show-password="item.type === 'password'"
                >
                </el-input>
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select
                  v-model="formData[`${item.field}`]"
                  :placeholder="item.palaceholder"
                  style="width: 100%"
                >
                  <el-option
                    v-for="option in item.options"
                    :key="option.value"
                    :value="option.value"
                    >{{ option.title }}</el-option
                  >
                </el-select>
              </template>
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker
                  v-bind="item.otherOptions"
                  v-model="formData[`${item.field}`]"
                ></el-date-picker
              ></template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
  </div>
</template>
<script lang="ts">
import { computed } from '@vue/reactivity'
import { defineComponent, PropType, ref } from 'vue'
import { IFormItem } from '../types/index'

export default defineComponent({
  name: 'FoRm',
  props: {
    modelValue: {
      type: Object,
      required: true
    },
    formItems: {
      type: Array as PropType<IFormItem[]>,
      default: () => []
    },
    labelWidth: {
      type: String,
      defalult: '100px'
    },
    itemStyle: {
      type: Object,
      default: () => ({ padding: '10px 40px' })
    },
    colLayout: {
      type: Object,
      default: () => ({
        xl: 6,
        lg: 8,
        md: 12,
        sm: 24,
        xm: 24
      })
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    // const formData = computed({
    //   get: () => {
    //     console.log('get执行')
    //     return props.modelValue
    //   },
    //   set: (newValue) => {
    //     emit('update:modelValue', newValue)
    //     console.log('set执行')
    //   }
    // })
    const formData = ref({ ...props.modelValue })
    return { formData }
  }
})
</script>

<style scoped>
.WsForm {
  padding-top: 22px;
}
</style>
