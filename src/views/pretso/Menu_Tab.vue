<template>
  <div class="container">
    <div class="bg">
      <div class="row">
        <div class="col-7">
          <div class="typography">Tabs</div>
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="home-tab"
                data-bs-toggle="tab"
                data-bs-target="#home"
                type="button"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                <h2>Home</h2>
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#profile"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                <h2>Profile</h2>
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#contact"
                type="button"
                role="tab"
                aria-controls="contact"
                aria-selected="false"
              >
                <h2>Contact</h2>
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              Home Tab
            </div>
            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
              Profile Tab
            </div>
            <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
              Contact Tab
            </div>
          </div>
        </div>
        <div class="col">
          <!-- <img src="../../assets/tabs.png" alt="" /> -->
        </div>
      </div>
      <div class="row">
        <div class="typography">Model</div>
        <!-- Button trigger modal -->
        <button
          type="button"
          class="btn btn-pretso-blue"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          <span class="title1">Normal</span>
        </button>

        <!-- Modal -->
        <div
          class="modal fade"
          id="staticBackdrop"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <button
                  type="button"
                  class="btn btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div class="img-box">
                  <svg
                    width="45"
                    height="53"
                    viewBox="0 0 45 53"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.5417 52.4853C13.9118 51.7873 9.24786 49.3325 5.54983 45.1208C1.84994 40.911 0 35.9679 0 30.2915C0 27.2207 0.604861 24.2773 1.81458 21.4615C3.02431 18.6475 4.74583 16.1936 6.97917 14.0998L10.9573 18.078C9.18924 19.6599 7.85203 21.4978 6.94567 23.5915C6.03745 25.6853 5.58333 27.9186 5.58333 30.2915C5.58333 34.3859 6.88611 38.003 9.49167 41.1427C12.0972 44.2843 15.4472 46.204 19.5417 46.9019V52.4853ZM25.125 52.4853V46.9019C29.1729 46.1575 32.5108 44.2266 35.1387 41.1092C37.7685 37.9918 39.0833 34.3859 39.0833 30.2915C39.0833 25.6387 37.4549 21.6839 34.1979 18.4269C30.941 15.17 26.9861 13.5415 22.3333 13.5415H22.124L25.1948 16.6123L21.2865 20.5207L11.5156 10.7498L21.2865 0.979004L25.1948 4.88734L22.124 7.95817H22.3333C28.5681 7.95817 33.849 10.1217 38.176 14.4488C42.5031 18.7759 44.6667 24.0568 44.6667 30.2915C44.6667 35.9214 42.8177 40.8421 39.1196 45.0538C35.4197 49.2637 30.7549 51.7408 25.125 52.4853Z"
                      fill="#14CBF3"
                    />
                    <path
                      d="M18.4 27.3234C17.5 25.5589 13.9 25.5589 13 27.3234M31 27.3234C30.1 25.5589 26.5 25.5589 25.6 27.3234M26.5 36.1463C25.9134 36.7332 25.2133 37.1994 24.4406 37.5177C23.6679 37.836 22.8381 38 22 38C21.1619 38 20.3321 37.836 19.5594 37.5177C18.7867 37.1994 18.0866 36.7332 17.5 36.1463"
                      stroke="#14CBF3"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <h2 class="text-pretso-blue">Do you want to reboot?</h2>
              </div>
              <div class="modal-footer">
                <button
                  class="btn btn-outline-pretso-blue"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span class="title1">Close</span>
                </button>
                <button class="btn btn-pretso-blue" data-bs-dismiss="modal">
                  <span class="title1">Save</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg {
  background-color: #f5faff;
  padding: 50px;
  margin: 50px;
}
.typography {
  height: 100px;
  font-weight: 700;
  font-size: 30px;
  line-height: 41px;
  display: flex;
  align-items: center;
}
img {
  width: 400px;
}
//tabs
.nav-tabs {
  //自定義Tab高度
  height: 48px;
}
.nav-link {
  //自定義按鈕寬度
  width: 196px;
}
.tab-content {
  //自定義內容高度 & 顏色
  height: 150px;
  background-color: #14caf317;
  //transform: translateX(2.1rem);
}

//modal
.modal-dialog {
  width: 387px;
}
.img-box {
  margin-bottom: 1.063rem;
  // flex
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

<script setup lang="ts"></script>
