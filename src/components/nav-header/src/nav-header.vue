<template>
  <div class="nav-header">
    <el-icon class="fold-menu" @click="handelFolidChange">
      <caret-left v-if="!isFold" />
      <arrow-right-bold v-else />
    </el-icon>
    <div class="content">
      <Ws-breadcrumtb :breadcrumbs="breadcrumbs" />
      <!-- <div>用户信息</div> -->
      <user-info></user-info>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { CaretLeft, ArrowRightBold } from '@element-plus/icons-vue'
import UserInfo from './user-info.vue'
import WsBreadcrumtb, { IBreadcrumb } from '@/base-ui/breadcrumb/index'
import { pathMapBreadcrumbs } from '@/utils/map-menus'
import { useStore } from '@/store'
import { useRoute } from 'vue-router'
import { computed } from '@vue/reactivity'

export default defineComponent({
  components: { CaretLeft, ArrowRightBold, UserInfo, WsBreadcrumtb },
  emits: ['foldChange'],
  setup(props, { emit }) {
    const isFold = ref(false)

    const handelFolidChange = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }
    // 面包屑参数    bug   需要转为ref对象
    // const store = useStore()
    // const userMenus = store.state.login.userMenus
    // const route = useRoute()
    // const currentPath = route.path
    const breadcrumbs = computed(() => {
      const store = useStore()
      const userMenus = store.state.login.userMenus
      const route = useRoute()
      const currentPath = route.path
      return pathMapBreadcrumbs(userMenus, currentPath)
    })
    console.log(breadcrumbs, '涛涛涛涛')

    return {
      isFold,
      handelFolidChange,
      breadcrumbs
    }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  width: 100%;
  background-color: #fff;

  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }
  .content {
    flex: 1;
    justify-content: space-between;
    align-items: center;
    display: flex;
    padding: 0 20px;
  }
}
</style>
