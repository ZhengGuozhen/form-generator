import { loadScriptQueue } from './loadScript'
import ELEMENT from 'element-ui'

// @zgz 改为npm引入
// 安装monaco-editor、monaco-editor-webpack-plugin
import * as monaco from 'monaco-editor'
// @zgz
let monacoEidtor = monaco

// monaco-editor单例
// @zgz 注释下面1行
// let monacoEidtor

/**
 * 动态加载monaco-editor cdn资源
 * @param {Function} cb 回调，必填
 */
export default function loadMonaco(cb) {
  if (monacoEidtor) {
    cb(monacoEidtor)
    return
  }

  const vs = 'lib/monaco-editor_0.19.3_min_vs'

  // 使用element ui实现加载提示
  const loading = ELEMENT.Loading.service({
    fullscreen: true,
    lock: true,
    text: '编辑器资源初始化中...',
    spinner: 'el-icon-loading',
    background: 'rgba(255, 255, 255, 0.5)'
  })

  !window.require && (window.require = {})
  !window.require.paths && (window.require.paths = {})
  window.require.paths.vs = vs

  loadScriptQueue([
    `${vs}_loader.js`,
    `${vs}_editor_editor.main.nls.js`,
    `${vs}_editor_editor.main.js`
  ], () => {
    loading.close()
    // eslint-disable-next-line no-undef
    monacoEidtor = monaco
    cb(monacoEidtor)
  })
}
