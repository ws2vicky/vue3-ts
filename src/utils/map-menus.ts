import { IBreadcrumb } from '@/base-ui/breadcrumb'
import type { RouteRecordRaw } from 'vue-router'

let firstMenu: any = null
export function mapMenusToRoutes(userMenus: any[]): RouteRecordRaw[] {
  console.log(userMenus, '他他他')

  const routes: RouteRecordRaw[] = []
  // 1先加载所有路由表
  const allRoutes: RouteRecordRaw[] = []
  // webpack提供的api
  const routeFiles = require.context('../router/main', true, /\.ts/)

  routeFiles.keys().forEach((key) => {
    console.log(key)
    // moudle模块
    const route = require('@/router/main' + key.split('.')[1])
    console.log(route, '10')

    allRoutes.push(route.default)
  })
  console.log(allRoutes)

  // 根据菜单注册路由   根据菜单获取需要添加的routes
  const _recurseGetRoute = (menus: any[]) => {
    console.log(menus, '11111111')
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find((route) => {
          return route.path === menu.url
        })
        if (route) routes.push(route)
        if (!firstMenu) {
          firstMenu = menu
        }
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }
  console.log(routes, '啊')

  _recurseGetRoute(userMenus)
  return routes
}
export function pathMapBreadcrumbs(userMenus: any[], currentPath: string) {
  const breadcrumtbs: IBreadcrumb[] = []
  pathMapToMenu(userMenus, currentPath, breadcrumtbs)
  return breadcrumtbs
}

export function pathMapToMenu(
  userMenus: any[],
  currentPath: string,
  breadcrumtbs?: IBreadcrumb[]
): any {
  for (const menu of userMenus) {
    if (menu.type === 1) {
      const findMenu = pathMapToMenu(menu.children ?? [], currentPath)
      if (findMenu) {
        breadcrumtbs?.push({ name: menu.name })
        breadcrumtbs?.push({ name: findMenu.name })
        return findMenu
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu
    }
  }
}

// export function pathMapToMenu(userMenus: any[], currentPath: string): any {
//   for (const menu of userMenus) {
//     if (menu.type === 1) {
//       const findMenu = pathMapToMenu(menu.children ?? [], currentPath)
//       if (findMenu) {
//         return findMenu
//       }
//     } else if (menu.type === 2 && menu.url === currentPath) {
//       return menu
//     }
//   }
// }
export { firstMenu }
