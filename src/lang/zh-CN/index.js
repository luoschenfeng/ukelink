import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import request from './request'
import login from './login'
import common from './common'
import contentExample from './contentExample'
import dashboard from './dashboard'
import layout from './layout'

/**
 * 定义时以位置为对象名
 */
export default {
  ...zhLocale,
  common,
  request,
  login,
  contentExample,
  dashboard,
  layout,
}
