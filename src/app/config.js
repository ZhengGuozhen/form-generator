// @zgz
// 状态类数据组件 【左面板】
export const stateComponents = [
  {
    // 组件的自定义配置
    __config__: {
      label: 'Tag',
      labelWidth: null,
      showLabel: true,
      changeTag: true,
      // tag: 'el-input',
      tag: 'demo-tag',
      tagIcon: 'input',
      // defaultValue: undefined,
      // required: true,
      // layout: 'colFormItem',
      layout: 'colFormItem_zgz',
      span: 24
      // document: 'https://element.eleme.cn/#/zh-CN/component/input',
      // 正则校验规则
      // regList: []
    }
    // 组件的插槽属性
    // __slot__: {
    //   prepend: 'prepend',
    //   append: 'append'
    // },
    // 其余的为可直接写在组件标签上的属性
    // placeholder: '请输入',
    // style: { width: '100%' },
    // clearable: true,
    // 'prefix-icon': '',
    // 'suffix-icon': '',
    // maxlength: null,
    // 'show-word-limit': false,
    // readonly: false,
    // disabled: true
  },
  {
    // 组件的自定义配置
    __config__: {
      label: 'Table',
      labelWidth: null,
      showLabel: true,
      changeTag: true,
      // tag: 'el-input',
      tag: 'demo-table',
      tagIcon: 'table',
      layout: 'colFormItem_zgz',
      span: 24
    }
  }
]
