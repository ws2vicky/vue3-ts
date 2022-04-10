<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside :width="isCollapse ? '60px' : '210px'">
        <!-- <el-aside width="210px"> -->
        <nav-menu :collapse="isCollapse" />
      </el-aside>
      <el-container class="page">
        <el-header class="page-header">
          <nav-header @fold-change="handleFoldChange" />
        </el-header>
        <el-main class="page-content">
          <div class="page-info">
            <router-view />
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { NavMenu } from '@/components/nav-menu/index'
import { NavHeader } from '@/components/nav-header'
export default defineComponent({
  name: 'MainV',
  components: { NavMenu, NavHeader },
  setup() {
    // 保存子组件传来的值
    const isCollapse = ref(false)
    const handleFoldChange = (isFold: boolean) => {
      isCollapse.value = isFold
      console.log(isFold)
    }
    return {
      isCollapse,
      handleFoldChange
    }
  }
})
</script>

<style scoped lang="less">
.main {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #f0f2f5;
}

.main-content,
.page {
  height: 100%;
}

.page-content {
  text-align: center;
  height: calc(100% - 48px);
  .page-info {
    background-color: #fff;
    border-radius: 8px;
  }
}

.page-header {
  padding: 0;
}

//
</style>
