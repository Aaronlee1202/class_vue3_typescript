<template>
  <h1 class="table-name">充電樁狀態</h1>
  <div id="Table-Layer">
    <table class="table border-white align-middle">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col" class="top-title available-color">AVAILABLE</th>
          <th scope="col" class="top-title charging-color">CHARGING</th>
          <th scope="col" class="top-title faulty-color">FAULTY</th>
          <th scope="col" class="top-title unavailable-color">UNAVAILABLE</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row" class="left-title">B1</th>
          <td>6</td>
          <td>11</td>
          <td class="faulty-color">3</td>
          <td>1</td>
        </tr>
        <tr>
          <th scope="row" class="left-title">B2</th>
          <td>10</td>
          <td>7</td>
          <td class="faulty-color">2</td>
          <td>2</td>
        </tr>
        <tr>
          <th scope="row" class="left-title">B3</th>
          <td>15</td>
          <td>2</td>
          <td class="faulty-color">0</td>
          <td>1</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
#Table-Layer {
  width: 700px;
  height: 100%;
  //表格置中
  margin-left: auto;
  margin-right: auto;
}
.table-name {
  position: relative;
  padding: 0 0 0 10rem;
}

.top-title {
  width: 160px;
  height: 50px;
  font-weight: 700;
  font-size: 16px;
}

table td {
  border-bottom-width: 4px !important;
  border-right-width: 4px !important;
}
th {
  width: 50px;
  text-align: center;
}
td {
  height: 50px;
  font-weight: 500;
  text-align: center;
  background-color: rgba(198, 204, 216, 0.1) !important;
  //background-color: var(--bs-light-grey) + opacity: 0.1
}

.available-color {
  color: var(--bs-normal-green);
}
.charging-color {
  color: var(--bs-pretso-blue);
}
.faulty-color {
  color: var(--bs-error-red);
}
.unavailable-color {
  color: var(--bs-light-grey);
}
</style>
