import { describe, test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ButtonSlot from '@/components/PretsoComponents/ButtonSlot.vue'
import Button from '@/views/pretso/Btn_Font.vue'
import { nextTick } from 'process'

describe('Demo', () => {
  test('Test case', () => {
    const a = 1
    const b = 2
    expect(a + b).toBe(3)
  })
})

//畫面渲染測試
describe('hello', () => {
  test('className', () => {
    const wrapper = mount(ButtonSlot)
    const boxDOM = wrapper.find('.btn')
    // 判斷className為btn的DOM是否存在
    expect(boxDOM).toBeTruthy()

    const slotDOM = boxDOM.find('.title1')
    //判斷className為btn的DOM內部子節點DOM是否存在
    expect(slotDOM).toBeTruthy()
    expect(slotDOM.text()).toBe('Button')
  })
})

//行為測試
describe('Button', () => {
  test('click event', async () => {
    //模擬瀏覽器渲染元件
    const wrapper = mount(Button, { props: { num: 123 } })
    //找到文件中DOM節點
    const DOM = wrapper.find('.typography')
    //找到按鈕DOM節點
    const btnDOM = wrapper.find('.btn-test')
    //驗證props
    expect(DOM.text()).toBe('Button states123')
    //觸發click
    btnDOM.trigger('click')
    //等待click結束 等待DOM變化結束
    await nextTick(() => {
      console.log('click finish');
    })
    //click後的驗證結果
    expect(DOM.text()).toBe('Button states124')
  })
})

//請求測試


//細節測試