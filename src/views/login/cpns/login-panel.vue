<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" stretch="true">
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><user-filled /></el-icon>
            <span>账号登陆</span>
          </span>
        </template>
        <LoginAccount />
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><iphone /></el-icon>
            <span>手机登录</span>
          </span>
        </template>
        <LoginPhone />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { UserFilled, Iphone } from '@element-plus/icons-vue'
// 导入组件
import LoginPhone from './login-phone.vue'
import LoginAccount from './login-account.vue'
export default defineComponent({
  components: { Iphone, UserFilled, LoginPhone, LoginAccount },
  setup() {
    return {}
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
</style>
