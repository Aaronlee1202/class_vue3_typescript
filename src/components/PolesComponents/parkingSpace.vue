<template>
  <div>
    <h1 class="parking-name">B1充電車位</h1>
    <div class="parking-img-box">
      <img src="../../assets/polesView/parking.png" alt="" />
    </div>
    <div class="parking-info-box">
      <div class="parking-info-card bg-white">
        <div class="row row-height">
          <div class="col-6">
            <h1 class="card-title margin-top">充電車位細項 B1/1</h1>
            <div class="flex margin-top">
              <span class="info-title">充電樁</span>
              <span class="info-title">:</span>
              <span class="info-content">SWD114</span>
              <div class="pole-status">CHARGING</div>
            </div>
            <div class="flex margin-top">
              <span class="info-title">聯絡人</span>
              <span class="info-title">:</span>
              <span class="info-content">Leo Lee</span>
              <div class="margin-left"></div>
              <span class="info-title">電話</span>
              <span class="info-title">:</span>
              <span class="info-content">0999-999-999</span>
            </div>
            <div class="flex margin-top">
              <span class="info-title">車號</span>
              <span class="info-title">:</span>
              <span class="info-content">FES-741 / 公司車</span>
            </div>
            <div class="flex margin-top">
              <span class="info-title">使用時間</span>
              <span class="info-title">:</span>
              <span class="info-content">1hr 12 mins</span>
            </div>
          </div>
          <div class="col">
            <div class="info-img-box">
              <img src="@/assets/polesView/Rectangle.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.flex {
  display: flex;
}
.margin-top {
  margin-top: 1rem;
}
.margin-left {
  margin-left: 2rem;
}
.row-height {
  height: 100%;
}

.parking-name {
  position: relative;
  padding: 2rem 0 0 6rem;
}

.parking-img-box {
  width: 750px;
  height: auto;
  //div置中
  margin-left: auto;
  margin-right: auto;
  //內容置中
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 90%;
    margin-top: 0.5rem;
    object-fit: contain;
  }
}

.parking-info-box {
  width: 100%;
  display: flex;
  // align-items: center;
  justify-content: center;
  margin: 2rem 0 0 0;
}
.parking-info-card {
  width: 680px;
  height: 248px;
  padding: 1rem 3rem 1rem 3rem;
  box-shadow: 0px 10px 13px rgba(17, 38, 146, 0.05);
  border-radius: 12px;
}

.info-title {
  margin: 0 0.2rem 0 0;
  font-weight: 700;
  font-size: 14px;
}
.info-content {
  font-weight: 500;
  font-size: 14px;
}
.pole-status {
  width: 70px;
  height: auto;
  margin: 0 0 0 1.5rem;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  background-color: var(--bs-pretso-blue);
}

.info-img-box {
  width: 100%;
  height: 100%;
  // flex
  display: flex;
  align-items: center;
  justify-content: right;
  img {
    width: 100%;
    object-fit: contain;
  }
}
</style>
