// 表单验证
const rules = {
  name: [
    {
      required: true,
      message: 'account必传( ͡° ͜ʖ ͡°)',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: '用户名为5到10个字母或数字Y(^_^)',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '密码必穿↖(^ω^)↗',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{3,}$/,
      message: '密码为3位及以上字母或数字^o^/',
      trigger: 'blur'
    }
  ]
}
export { rules }
