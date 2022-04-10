<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="~@/assets/img/logo.svg" alt="" />
      <span v-if="!collapse" class="title">vue3+TS of ws </span>
    </div>
    <el-menu
      :default-active="defaultValue"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      :unique-opened="true"
      :collapse="collapse"
    >
      <!-- default-active解决刷新后菜单选择问题 -->
      <template v-for="item in userMenus" :key="item.id">
        <!-- 二级菜单 -->
        <template v-if="item.type === 1">
          <!-- 二级菜单展开的标题 -->
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <el-icon><location /></el-icon>
              <span>{{ item.name }}</span>
            </template>
            <template v-for="subitem in item.children" :key="subitem.id">
              <el-menu-item-group>
                <el-menu-item :index="subitem.id + ''" @click="handleMenuItemClick(subitem)">
                  <span>{{ subitem.name }}</span>
                </el-menu-item>
              </el-menu-item-group>
            </template>
          </el-sub-menu>
        </template>
        <!-- 一级菜单 -->
        <template v-else-if="item.type === 2">
          <el-menu-item :index="item.id + ''">
            <el-icon><Document /></el-icon>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
// 导入图标
import { Document, Setting, Location } from '@element-plus/icons-vue'
import { useStore } from '@/store'
import { useRoute, useRouter } from 'vue-router'

import { pathMapToMenu } from '@/utils/map-menus'

export default defineComponent({
  components: { Document, Location },
  props: {
    collapse: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    // store
    const store = useStore()
    const userMenus = computed(() => {
      return store.state.login.userMenus
    })
    // router
    const router = useRouter()
    const route = useRoute()
    const currentPath = route.path
    console.log(currentPath)

    // 那路径 根据路径匹配菜单
    const menu = pathMapToMenu(userMenus.value, currentPath)
    console.log(menu.id, '我是')

    const defaultValue = ref(menu.id + '')
    const handleMenuItemClick = (item: any) => {
      console.log(item, 'aaaaaaaaaaaaaaaaaa')
      router.push({
        path: item.url ?? '/not-found'
      })
    }

    console.log(userMenus)

    return { userMenus, handleMenuItemClick, defaultValue }
  }
})
</script>

<style scoped lang="less">
.nav-menu {
  height: 100%;
  background-color: #001529;

  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .img {
      height: 100%;
      margin: 0 10px;
    }

    .title {
      font-size: 16px;
      font-weight: 700;
      color: white;
    }
  }
}
</style>
