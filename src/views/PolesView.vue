<template>
  <div class="container-fault">
    <div class="row">
      <div class="col-6 bg-white">
        <div id="Layer">
          <h1 class="parking-name">物業大樓停車場</h1>
          <div class="layer-stack_wrap">
            <div class="layer-stack_layer layer-stack_layer1" @click="clickLayer(1)">
              <div class="arrow-box" :class="[layerSwitch == 1 ? 'arrow-right' : '']"></div>
              <p class="layerNum" :class="[layerSwitch == 1 ? 'click-color' : '']">B3</p>
            </div>
            <div class="layer-stack_layer layer-stack__layer2" @click="clickLayer(2)">
              <div class="arrow-box" :class="[layerSwitch == 2 ? 'arrow-right' : '']"></div>
              <p class="layerNum" :class="[layerSwitch == 2 ? 'click-color' : '']">B2</p>
            </div>
            <div class="layer-stack_layer layer-stack__layer3" @click="clickLayer(3)">
              <div class="arrow-box" :class="[layerSwitch == 3 ? 'arrow-right' : '']"></div>
              <p class="layerNum" :class="[layerSwitch == 3 ? 'click-color' : '']">B1</p>
            </div>
          </div>
        </div>
        <polesStatus />
      </div>
      <div class="col-6"><parkingSpace /></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import polesStatus from '@/components/PolesComponents/polesStatus.vue'
import parkingSpace from '@/components/PolesComponents/parkingSpace.vue'
import { ref } from 'vue'

let layerSwitch = ref<number>(0)
const clickLayer = (event: number) => {
  if (layerSwitch.value == event) {
    layerSwitch.value = 0
  } else {
    layerSwitch.value = event
  }
}
</script>

<style lang="scss" scoped>
#Layer {
  width: 600px;
  height: 600px;
}
.bg-white {
  height: 100vh;
}

.parking-name {
  position: relative;
  padding: 2rem 0 0 10rem;
}
.layerNum {
  font-size: 2rem;
  font-weight: 700;
}

.layer-stack_wrap {
  position: relative;
  margin: 16rem 0 0 14rem;
}

// 每一層地板
.layer-stack_layer {
  width: 409px;
  height: 219px;
  position: absolute;
  transform: rotateX(50deg) rotateZ(25deg) translateZ(0);
  transition: all 0.3s ease-out;
  text-align: start;
  display: flex;
  align-items: flex-end;
  cursor: pointer;
  user-select: none;
}

.layer-stack_layer1 {
  background: #e6ecf0;
  opacity: 0.9;
}
.layer-stack_layer1:hover {
  width: 438.23px;
  height: 239.08px;
  box-shadow: 1px 1px 10px 2px rgba(0, 0, 0, 0.15); //rgba(0, 0, 0, 0.275)
  transition: (all 0.15s);
}

// 第二層浮起來
.layer-stack__layer2 {
  transform: rotateX(50deg) rotateZ(25deg) translateZ(100px);
  background: #eff4f7;
  opacity: 0.9;
}
.layer-stack__layer2:hover {
  width: 438.23px;
  height: 239.08px;
  box-shadow: 1px 1px 10px 2px rgba(0, 0, 0, 0.15);
  transition: (all 0.15s);
}

// 第三層浮起來
.layer-stack__layer3 {
  transform: rotateX(50deg) rotateZ(25deg) translateZ(210px);
  background: #f6f9fc;
  opacity: 0.9;
}
.layer-stack__layer3:hover {
  width: 438.23px;
  height: 239.08px;
  box-shadow: 1px 1px 10px 2px rgba(0, 0, 0, 0.15);
  transition: (all 0.15s);
}

h2 {
  margin: 0 0 15px 0px;
  font-weight: 700;
  display: flex;
  text-align: center;
  align-items: flex-start;
  color: #b7c6d1;
}
.click-color {
  color: #363636;
}

.arrow-right {
  width: 0;
  height: 0;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
  border-left: 15px solid var(--bs-pretso-blue);
}
.arrow-box {
  width: 22px;
  height: 30px;
  margin: 0 0 19px 20px;
}
</style>
