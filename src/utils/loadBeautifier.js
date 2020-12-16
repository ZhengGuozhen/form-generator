import loadScript from './loadScript'
import ELEMENT from 'element-ui'

// @zgz 改为npm引入
import * as jsBeautify from 'js-beautify'
// @zgz
let beautifierObj = jsBeautify

// @zgz 注释下面1行
// let beautifierObj

export default function loadBeautifier(cb) {
  if (beautifierObj) {
    cb(beautifierObj)
    return
  }

  const loading = ELEMENT.Loading.service({
    fullscreen: true,
    lock: true,
    text: '格式化资源加载中...',
    spinner: 'el-icon-loading',
    background: 'rgba(255, 255, 255, 0.5)'
  })

  loadScript('lib/js-beautify_1.10.2_beautifier.min.js', () => {
    loading.close()
    // eslint-disable-next-line no-undef
    beautifierObj = beautifier
    cb(beautifierObj)
  })
}
