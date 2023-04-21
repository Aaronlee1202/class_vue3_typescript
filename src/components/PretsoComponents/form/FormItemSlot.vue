<template>
  <div class="container">
    <div class="row">
      <div class="col-1">
        <span>{{ props.label }}</span>
      </div>
      <div class="col">
        <slot></slot>
      </div>
    </div>
    <div class="row">
      <span v-if="errorTip">{{ errorTip }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { inject, onMounted, ref, toRaw, watch } from 'vue'
import { FORM_CONTEXT_KEY } from '@/types'
import type { FormContext, ValidateRule, ValidateResult } from '@/types'

const errorTip = ref<string>('')
const formContext: FormContext | undefined = inject<FormContext>(FORM_CONTEXT_KEY)

const props = defineProps<{
  name?: string
  label?: string
  rule?: ValidateRule
}>()
const resetField = () => {
  if (formContext?.model && props.name && formContext?.model?.[props?.name]) {
    formContext.model[props?.name] = undefined
  }
}
async function validateFieldValue(val: unknown): Promise<ValidateResult> {
  if (props.rule?.validator) {
    const result = await props.rule?.validator?.(val)
    if (result.hasError && result.message) {
      errorTip.value = result.message
    } else {
      errorTip.value = ''
    }
    return { ...result, ...{ name: props.name, value: toRaw(val) } }
  }
  return {
    hasError: false
  }
}
async function validateField(): Promise<ValidateResult> {
  if (props.rule?.validator && props.name) {
    const result = await validateFieldValue(formContext?.model?.[props?.name])
    if (result.hasError && result.message) {
      errorTip.value = result.message
    } else {
      errorTip.value
    }
    return result
  }
  return {
    hasError: false
  }
}
onMounted(() => {
  if (formContext?.model && props.name && formContext?.model?.[props?.name]) {
    formContext?.addField({
      name: props.name,
      rule: props.rule,
      resetField,
      validateField
    })
    watch([() => formContext?.model?.[props.name as string]], ([newValue]) => {
      validateFieldValue(newValue)
    })
  }
})
defineExpose({
  resetField,
  validateField
})
</script>
