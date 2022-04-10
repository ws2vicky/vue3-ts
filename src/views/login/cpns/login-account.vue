<template>
  <div class="login-account">
    <el-form ref="formRef" :rules="rules" :model="account">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" show-password></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { ElForm } from 'element-plus/lib/components'
import { defineComponent, reactive, ref } from 'vue'
import { rules } from '../config/account-config'
// 导入本地缓存
import localCache from '@/utils/cache'
// 导入vuex
import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    const account = reactive({
      name: localCache.getCatch('name') ?? '',
      password: localCache.getCatch('password') ?? ''
    })
    // 获取dom
    const formRef = ref<InstanceType<typeof ElForm>>()

    const store = useStore()

    const loginAction = (iskeepPassword: boolean) => {
      // 表单验证回调
      // 判断是否需要记住密码
      formRef.value?.validate((valid) => {
        if (valid) {
          //本地缓存
          if (iskeepPassword) {
            localCache.setCache('name', account.name)
            localCache.setCache('password', account.password)
          } else {
            localCache.deleteCatch('name')
            localCache.deleteCatch('password')
          }
          //  登陆验证
          store.dispatch('login/accountLoginAction', { ...account })
        }
      })
    }
    return { account, rules, loginAction, formRef }
  }
})
</script>

<style scoped lang="less"></style>
