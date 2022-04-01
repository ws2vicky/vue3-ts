<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs v-model="currentRef" type="border-card" :stretch="true">
      <el-tab-pane name="account">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><user-filled /></el-icon>
            <span>账号登陆</span>
          </span>
        </template>
        <LoginAccount ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><Iphone /></el-icon>
            <span>手机登录</span>
          </span>
        </template>
        <LoginPhone ref="phoneRef" />
      </el-tab-pane>
    </el-tabs>
    <div class="account-control">
      <el-checkbox v-model="iskeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button type="primary" class="login-btn" @click="HandleLoginClick">立即登录</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
// 导入图标
import { Iphone, UserFilled } from '@element-plus/icons-vue'
// 导入组件
import LoginPhone from './login-phone.vue'
import LoginAccount from './login-account.vue'

export default defineComponent({
  components: { Iphone, UserFilled, LoginPhone, LoginAccount },
  setup() {
    const iskeepPassword = ref(true)
    const accountRef = ref<InstanceType<typeof LoginAccount>>()
    const phoneRef = ref<InstanceType<typeof LoginPhone>>()
    // 绑定选项卡
    const currentRef = ref('account')
    const HandleLoginClick = () => {
      if (currentRef.value === 'account') {
        accountRef.value?.loginAction(iskeepPassword.value)
      } else {
        ElMessage({
          message: '未实现手机登录功能.',
          grouping: true,
          type: 'success'
        })
      }
    }
    return {
      iskeepPassword,
      HandleLoginClick,
      accountRef,
      phoneRef,
      currentRef
    }
  }
})
</script>

<style scoped lang="less">
.login-panel {
  width: 320px;
  margin-bottom: 120px;
}
.title {
  text-align: center;
}
.account-control {
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
}
.login-btn {
  width: inherit;
}
</style>
