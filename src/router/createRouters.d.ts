import Vue, { ComponentOptions, PluginFunction, AsyncComponent } from 'vue'

type Component = ComponentOptions<Vue> | typeof Vue | AsyncComponent
type Dictionary<T> = { [key: string]: T }
type ErrorHandler = (err: Error) => void

export type RouterMode = 'hash' | 'history' | 'abstract'
export type RawLocation = string | Location
export type RedirectOption = RawLocation | ((to: Route) => RawLocation)
export type NavigationGuardNext<V extends Vue = Vue> = (
  to?: RawLocation | false | ((vm: V) => any) | void
) => void

export type NavigationGuard<V extends Vue = Vue> = (
  to: Route,
  from: Route,
  next: NavigationGuardNext<V>
) => any

export declare class VueRouter {
  constructor(options?: RouterOptions)

  app: Vue
  mode: RouterMode
  currentRoute: Route

  beforeEach(guard: NavigationGuard): Function
  beforeResolve(guard: NavigationGuard): Function
  afterEach(hook: (to: Route, from: Route) => any): Function
  push(location: RawLocation): Promise<Route>
  replace(location: RawLocation): Promise<Route>
  push(location: RawLocation, onComplete?: Function, onAbort?: ErrorHandler): void
  replace(location: RawLocation, onComplete?: Function, onAbort?: ErrorHandler): void
  go(n: number): void
  back(): void
  forward(): void
  getMatchedComponents(to?: RawLocation | Route): Component[]
  onReady(cb: Function, errorCb?: ErrorHandler): void
  onError(cb: ErrorHandler): void
  addRoutes(routes: RouteConfig[]): void
  resolve(
    to: RawLocation,
    current?: Route,
    append?: boolean
  ): {
    location: Location
    route: Route
    href: string
    // backwards compat
    normalizedTo: Location
    resolved: Route
  }

  static install: PluginFunction<never>
}

type Position = { x: number; y: number }
type PositionResult = Position | { selector: string; offset?: Position } | void

export interface RouterOptions {
  routes?: RouteConfig[]
  mode?: RouterMode
  fallback?: boolean
  base?: string
  linkActiveClass?: string
  linkExactActiveClass?: string
  parseQuery?: (query: string) => Object
  stringifyQuery?: (query: Object) => string
  scrollBehavior?: (
    to: Route,
    from: Route,
    savedPosition: Position | void
  ) => PositionResult | Promise<PositionResult> | undefined | null
}

type RoutePropsFunction = (route: Route) => Object

export interface PathToRegexpOptions {
  sensitive?: boolean
  strict?: boolean
  end?: boolean
}

interface IMeta {
  /**
   *  权限（不指定则默认加入到侧边栏）
   */
  roles?: Array<number | string>
  /**
   *  标题 （侧边栏等标题）,如果没有标题则在侧边栏和面包屑中隐藏
   */
  title?: string
  /**
   *  icon （侧边栏等icon）
   */
  icon: string
  /**
   *  是否在组件上启用keep-alive
   * @default true （默认为true，启用）
   */
  cache?: boolean
  /**
   *  是否在侧边栏显示
   * @default true （默认显示）
   */
  sidebarShow?: boolean
  /**
   *  要激活的侧边栏栏目(接受与redirect同样的参数)
   */
  sidebarActive?: RedirectOption
  /**
   *  是否在面包屑显示
   * @default true （默认显示）
   */
  breadcrumbShow?: boolean
  /**
   *  在面包屑中渲染的标签
   * @default true (true渲染为‘a’,false渲染为span,且不能点击)
   */
  breadcrumbiSTag?: number | string | boolean
  [propName: string]: string | number | boolean | Array<number | string> | RedirectOption
}

interface _RouteConfigBase {
  /**
   * 路由路径
   */
  path: string
  /**
   * 路由名称
   */
  name?: string
  /**
   *  路由嵌套
   */
  children?: RouteConfig[]
  /**
   * 路由重定向
   */
  redirect?: RedirectOption
  /**
   * 路由别名
   */
  alias?: string | string[]
  /**
   * 路由meta信息
   */
  meta?: IMeta
  /**
   * 路由守卫
   */
  beforeEnter?: NavigationGuard
  caseSensitive?: boolean
  pathToRegexpOptions?: PathToRegexpOptions
}

interface RouteConfigSingleView extends _RouteConfigBase {
  component?: Component
  props?: boolean | Object | RoutePropsFunction
}

interface RouteConfigMultipleViews extends _RouteConfigBase {
  components?: Dictionary<Component>
  props?: Dictionary<boolean | Object | RoutePropsFunction>
}

export type RouteConfig = RouteConfigSingleView | RouteConfigMultipleViews

export interface RouteRecord {
  path: string
  regex: RegExp
  components: Dictionary<Component>
  instances: Dictionary<Vue>
  name?: string
  parent?: RouteRecord
  redirect?: RedirectOption
  matchAs?: string
  meta: IMeta
  beforeEnter?: (route: Route, redirect: (location: RawLocation) => void, next: () => void) => any
  props: boolean | Object | RoutePropsFunction | Dictionary<boolean | Object | RoutePropsFunction>
}

export interface Location {
  name?: string
  path?: string
  hash?: string
  query?: Dictionary<string | (string | null)[] | null | undefined>
  params?: Dictionary<string>
  append?: boolean
  replace?: boolean
}

export interface Route {
  path: string
  name?: string | null
  hash: string
  query: Dictionary<string | (string | null)[]>
  params: Dictionary<string>
  fullPath: string
  matched: RouteRecord[]
  redirectedFrom?: string
  meta?: IMeta
}
/**
 * 路由对象或路由对象数组
 */
type createRouterConfig = RouteConfig |　RouteConfig[]
/**
 *
 * @param 路由对象或路由对象数组
 */
function createRouter(createRouterConfig: createRouterConfig): createRouterConfig {
  return createRouterConfig
}
export default createRouter
