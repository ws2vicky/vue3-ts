<template>
  <div>
    <el-form>
      <el-form-item label="手机号码" prop="phone">
        <el-input v-model="phone.number"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="verify-code">
        <el-input v-model="phone.code"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  setup() {
    const phone = reactive({
      number: '',
      code: ''
    })

    const rules = {}
    return {
      phone
    }
  }
})
</script>

<style scoped></style>
