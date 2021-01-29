import enLocale from 'element-ui/lib/locale/lang/en'
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
  ...enLocale,
  common,
  request,
  login,
  contentExample,
  dashboard,
  layout,
}
