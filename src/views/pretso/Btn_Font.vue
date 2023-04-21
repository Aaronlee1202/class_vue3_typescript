<template>
  <div class="container">
    <div class="button-bg">
      <div class="row">
        <div class="col-8">
          <div class="row">
            <div class="col typography">Button states{{num}}</div>
          </div>
          <div class="row">
            <div class="col-4 h2-color">
              <h2 class="">Primary button</h2>
            </div>
            <div class="col">
              <ButtonSlot
                btnStyle="btn-pretso-blue btn-test"
                :disabled="disabled"
                @click="btnClick"
              >
                <SpinnerSlot v-show="spinnerShow"></SpinnerSlot>
                {{ btnName }}
              </ButtonSlot>
            </div>
          </div>
          <div class="row">
            <div class="col-4 h2-color">
              <h2 class="">Secondary button</h2>
            </div>
            <div class="col">
              <ButtonSlot btnStyle="btn-outline-pretso-blue" :disabled="disabled" @click="btnClick">
                <SpinnerSlot v-show="spinnerShow" spinnerStyle="text-light-grey"></SpinnerSlot>
                {{ btnName }}
              </ButtonSlot>
            </div>
          </div>
          <div class="row">
            <div class="col-4 h2-color">
              <h2>Button link</h2>
            </div>
            <div class="col">
              <ButtonSlot btnStyle="btn-link text-pretso-blue">Normal</ButtonSlot>
            </div>
          </div>
          <div class="row">
            <div class="col-4 h2-color">
              <h2>Disabled</h2>
            </div>
            <div class="col">
              <ButtonSlot btnStyle="btn-pretso-blue disabled">Disabled</ButtonSlot>

              <ButtonSlot btnStyle="btn-pretso-blue disabled">
                <SpinnerSlot></SpinnerSlot>
              </ButtonSlot>

              <ButtonSlot btnStyle="btn-outline-pretso-blue disabled">
                <SpinnerSlot spinnerStyle="text-light-grey"></SpinnerSlot>
              </ButtonSlot>
            </div>
          </div>
          <div class="row">
            <div class="col-4 h2-color">
              <h2>"More" button</h2>
            </div>
            <div class="col">
              <button type="button" class="btn btn-more"></button>
            </div>
          </div>
          <div class="row">
            <div class="col-4 h2-color">
              <h2 class="">"Close" button</h2>
            </div>
            <div class="col">
              <button type="button" class="btn btn-close"></button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="row">
            <div class="col typography">Typography</div>
          </div>
          <div class="row mb-4 mt-4">
            <div class="col-3">
              <h1>H1</h1>
            </div>
            <div class="col">
              <h1>Noto Sans Bold 18pt</h1>
            </div>
          </div>
          <div class="row mb-4">
            <div class="col-3">
              <h2>H2</h2>
            </div>
            <div class="col">
              <h2>Noto Sans Bold 16pt</h2>
            </div>
          </div>
          <div class="row mb-4">
            <div class="col-3">
              <div class="title1">title1</div>
            </div>
            <div class="col">
              <div class="title1">Noto Sans Bold 14pt</div>
            </div>
          </div>
          <div class="row mb-4">
            <div class="col-3">
              <div class="title2">title2</div>
            </div>
            <div class="col">
              <div class="title2">Noto Sans Medium 14pt</div>
            </div>
          </div>
          <div class="row mb-4">
            <div class="col-3">
              <div class="body">body</div>
            </div>
            <div class="col">
              <div class="body">Noto Sans Bold 12pt</div>
            </div>
          </div>
          <div class="row mb-4">
            <div class="col-3">
              <div class="text1">text1</div>
            </div>
            <div class="col">
              <div class="text1">Noto Sans Bold 10pt</div>
            </div>
          </div>
          <div class="row mb-4">
            <div class="col-3">
              <div class="text2">text2</div>
            </div>
            <div class="col">
              <div class="text2">Noto Sans Medium 10pt</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ButtonSlot from '@/components/PretsoComponents/ButtonSlot.vue'
import SpinnerSlot from '@/components/PretsoComponents/SpinnerSlot.vue'
import { ref } from 'vue'

//unit test驗證用
const props = defineProps<{ num: number }>()
const num = ref<number>(props.num)

let btnName = ref<string | number>('Normal')
let disabled = ref<string>()
let spinnerShow = ref<boolean>(false)
function btnClick() {
  num.value++
  disabled.value = 'disabled'
  btnName.value = ''
  spinnerShow.value = true
  setTimeout(() => {
    disabled.value = ''
    btnName.value = 'Normal'
    spinnerShow.value = false
  }, 1000)
}
</script>

<style lang="scss" scoped>
.button-bg {
  background-color: #f5faff;
  padding: 50px;
  margin: 50px;
}
button {
  margin: 25px 25px 25px 0;
}
.btn-close {
  width: 1.5em;
  height: 1.5em;
}
.btn-more {
  width: 1.5em;
  height: 1.5em;
}
.h2-color {
  display: flex;
  align-items: center;
  color: #91aac1;
}
.typography {
  height: 100px;
  font-weight: 700;
  font-size: 30px;
  line-height: 41px;
  display: flex;
  align-items: center;
}
.title-box {
  height: 70px;
}
h1 {
  margin-right: 35px;
}
</style>
