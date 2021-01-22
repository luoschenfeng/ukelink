import Vue from 'vue'

// svg component
import SvgIcon from '@/components/SvgIcon'

// register globally
Vue.component('SvgIcon', SvgIcon)

const svgReq = require.context('./svg', false, /\.svg$/)

const requireAll = requireContext => requireContext.keys().map(requireContext)

requireAll(svgReq)


// svg debugger
if (process.env.NODE_ENV === 'development') {
  Vue.prototype['$svgList'] = svgReq.keys().map(path => {
    const matchs = path.match(/\.\/(.+)\.svg$/)

    const fileName = matchs[1]

    return fileName
  });
}
