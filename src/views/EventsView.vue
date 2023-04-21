<template>
  <div class="container">
    <div class="flex title-box">
      <h1>Event</h1>
      <div class="flex suggestion-box">
        <h2 class="suggestion-title">建議處理步驟</h2>
        <div class="round">1</div>
        <div class="title2">請至現場查看狀況</div>
        <div class="round">2</div>
        <div class="title2">重啟充電樁</div>
        <div class="round">3</div>
        <div class="title2">如持續亮紅燈,請回報維運工程師</div>
      </div>
      <ButtonSlot btnStyle="btn-pretso-blue">Normal</ButtonSlot>
    </div>
    <div>
      <Form ref="formRef" :model="model">
        <FormItem label="檢驗數字" name="data1" :rule="rule1">
          <input v-model="model.data1" />
        </FormItem>
        <FormItem label="檢驗字母" name="data2" :rule="rule2">
          <input v-model="model.data2" />
        </FormItem>
      </Form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import ButtonSlot from '@/components/PretsoComponents/ButtonSlot.vue'
import Form from '@/components/PretsoComponents/form/index'
import type { FormInstance } from '@/types'

const { FormItem } = Form
const formRef = ref<FormInstance>()
const model = reactive<{ data1: string; data2: string }>({
  data1: '123',
  data2: 'abc'
})

const rule1 = {
  validator: (val: string) => {
    const hasError = /^[0-9]{1,}$/gi.test(`${val || ''}`) !== true
    return {
      hasError,
      message: hasError ? '僅支援0-1的數字' : ''
    }
  }
}
const rule2 = {
  validator: (val: string) => {
    const hasError = /^[a-z]{1,}$/gi.test(`${val || ''}`) !== true
    return {
      hasError,
      message: hasError ? '僅支援a-z的大小寫字母' : ''
    }
  }
}

</script>

<style lang="scss" scoped>
.title-box {
  height: 70px;
}
h1 {
  margin-right: 35px;
}
.flex {
  display: flex;
  align-items: center;
}

.suggestion-box {
  width: 780px;
  height: 90%;
  background-color: #ffffff;
  justify-content: center;
}
.suggestion-title {
  font-weight: 700;
  font-size: 16px;
}
.round {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  text-align: center;
  color: #ffffff;
  background-color: var(--bs-pretso-blue);
}
</style>
