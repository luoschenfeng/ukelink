// import Vue from 'vue';
// import {
//   Button,
//   Message,

//   Scrollbar,
//   Form,
//   FormItem,
//   Select,
//   Input,

//   Avatar,

//   Dropdown,
//   DropdownMenu,
//   DropdownItem,
//   Menu,
//   Submenu,
//   MenuItemGroup,
//   MenuItem,

//   Tooltip,
//   Badge,
// } from 'element-ui'
// Vue.use(Button)
// Vue.use(Scrollbar)
// Vue.use(Form)
// Vue.use(FormItem)
// Vue.use(Select)
// Vue.use(Input)
// Vue.use(Avatar)
// Vue.use(Dropdown)
// Vue.use(DropdownMenu)
// Vue.use(DropdownItem)
// Vue.use(Menu)
// Vue.use(Submenu)
// Vue.use(MenuItemGroup)
// Vue.use(MenuItem)
// Vue.use(Tooltip)
// Vue.use(Badge)
// Vue.prototype.$message = Message

import '@/assets/theme/style/blue/index.css';
import Vue from 'vue';
import ElementUI from 'element-ui';
import i18n from '@/lang/i18n'
Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value),
});
