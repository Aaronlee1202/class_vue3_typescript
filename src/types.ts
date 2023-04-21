export type MessageType = 'info' | 'success' | 'warn' | 'error'

export interface MessageParams {
  text: string
  type?: MessageType
  duration?: number
}

export const FORM_CONTEXT_KEY = 'form-context-key'
// 表單元件 實例的數據類型
export interface FormInstance {
  resetFields(): void
  addField(field: FormItemContext): void
}

// 表單字段元件 實例的數據類型
export interface FormItemInstance {
  resetField?: () => void
  validateField?: () => Promise<ValidateResult>
}

// 表單字段元件 內置數據類型
export interface FormItemContext extends FormItemInstance {
  label?: string
  name?: string
  rule?: ValidateRule
}

// 表單元件 共享數據類型
export interface FormContext extends FormInstance {
  model?: {
    [key: string]: unknown
  }
  formInstance?: FormInstance
}

// 檢驗結果數據類型
export interface ValidateResult {
  hasError: boolean
  name?: string
  value?: unknown
  message?: string
}

// 檢驗規則數據類型
export interface ValidateRule {
  required?: boolean
  message?: string
  pattern?: RegExp
  // 字段檢驗方法
  validator?: (value: unknown) => ValidateResult | Promise<ValidateResult>
  trigger?: 'change' | 'blur' | Array<'change' | 'blur'>
}
