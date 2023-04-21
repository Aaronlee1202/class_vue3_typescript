<template>
  <header id="Header-Bar">
    <div id="Pretso-Logo">
      <img src="@/assets/pretso.svg" alt="logoIcon" />
    </div>
    <div>
      <img src="@/assets/user.svg" alt="userIcon" />
      <a class="title2 user-name">站點管理員</a>
    </div>
  </header>
  <nav id="Left-Nav">
    <router-link :to="{ path: '/', query: { id: 'PolesView' } }">
      <div class="nav-list" :class="[userClick == 'PolesView' ? 'nav-list-click' : '']">
        <div class="img-box">
          <svg
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              class="icon-color"
              d="M17.2036 4.465L17.2145 4.45444L13.1564 0.527778L12 1.64667L14.3018 3.87389C13.2764 4.25389 12.5455 5.20389 12.5455 6.33333C12.5455 6.67988 12.616 7.02303 12.7531 7.34319C12.8901 7.66336 13.091 7.95427 13.3443 8.19931C13.8557 8.6942 14.5494 8.97222 15.2727 8.97222C15.6655 8.97222 16.0255 8.88778 16.3636 8.75056V16.3611C16.3636 16.6411 16.2487 16.9095 16.0441 17.1075C15.8395 17.3055 15.5621 17.4167 15.2727 17.4167C14.9834 17.4167 14.7059 17.3055 14.5013 17.1075C14.2968 16.9095 14.1818 16.6411 14.1818 16.3611V11.6111C14.1818 11.0512 13.9519 10.5142 13.5428 10.1183C13.1336 9.72242 12.5787 9.5 12 9.5H10.9091V2.11111C10.9091 1.55121 10.6792 1.01424 10.2701 0.61833C9.86088 0.22242 9.30593 0 8.72727 0H2.18182C1.60316 0 1.04821 0.22242 0.63904 0.61833C0.229869 1.01424 0 1.55121 0 2.11111V19H10.9091V11.0833H12.5455V16.3611C12.5455 17.061 12.8328 17.7322 13.3443 18.2271C13.8557 18.722 14.5494 19 15.2727 19C15.6309 19 15.9855 18.9317 16.3164 18.7991C16.6473 18.6665 16.948 18.4721 17.2012 18.2271C17.4545 17.982 17.6553 17.6911 17.7924 17.371C17.9295 17.0508 18 16.7077 18 16.3611V6.33333C18 5.605 17.6945 4.94 17.2036 4.465ZM15.2727 7.38889C14.9834 7.38889 14.7059 7.27768 14.5013 7.07972C14.2968 6.88177 14.1818 6.61328 14.1818 6.33333C14.1818 6.05338 14.2968 5.7849 14.5013 5.58694C14.7059 5.38899 14.9834 5.27778 15.2727 5.27778C15.5621 5.27778 15.8395 5.38899 16.0441 5.58694C16.2487 5.7849 16.3636 6.05338 16.3636 6.33333C16.3636 6.61328 16.2487 6.88177 16.0441 7.07972C15.8395 7.27768 15.5621 7.38889 15.2727 7.38889ZM4.36364 15.8333V11.0833H2.18182L6.54545 3.16667V8.44444H8.72727L4.36364 15.8333Z"
            />
          </svg>
        </div>
        <span class="nav_link title1"> Poles </span>
      </div>
    </router-link>
    <router-link :to="{ path: '/events', query: { id: 'EventsView' } }">
      <div class="nav-list" :class="[userClick == 'EventsView' ? 'nav-list-click' : '']">
        <div class="img-box">
          <svg
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              class="icon-color"
              d="M2.00137 17.0075H17.0614C18.6014 17.0075 19.5614 15.3375 18.7914 14.0075L11.2614 0.9975C10.4914 -0.3325 8.57137 -0.3325 7.80137 0.9975L0.271371 14.0075C-0.498629 15.3375 0.461371 17.0075 2.00137 17.0075ZM9.53137 10.0075C8.98137 10.0075 8.53137 9.5575 8.53137 9.0075V7.0075C8.53137 6.4575 8.98137 6.0075 9.53137 6.0075C10.0814 6.0075 10.5314 6.4575 10.5314 7.0075V9.0075C10.5314 9.5575 10.0814 10.0075 9.53137 10.0075ZM10.5314 14.0075H8.53137V12.0075H10.5314V14.0075Z"
            />
          </svg>
        </div>
        <span class="nav_link title1"> Events </span>
      </div>
    </router-link>
    <div
      class="nav-list"
      :class="[userClick === 'btn_font' ? 'nav-list-click' : '']"
      data-bs-toggle="collapse"
      data-bs-target="#nav-collapse"
      aria-expanded="false"
      aria-controls="nav-collapse"
    >
      <div class="img-box"></div>
      <span class="nav_link title1"> DesignView </span>
      <div class="nav-arrow-box">
        <svg
          width="10"
          height="5"
          viewBox="0 0 10 5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path class="icon-color" d="M5 5L0 0H10L5 5Z" />
        </svg>
      </div>
    </div>
    <div class="collapse" id="nav-collapse">
      <router-link :to="{ path: '/btn_font', query: { id: 'btn_font' } }">
        <div class="nav-list" :class="[userClick == 'btn_font' ? 'nav-list-click' : '']">
          <div class="img-box"></div>
          <span class="nav_link title1"> Font & Button </span>
        </div>
      </router-link>
      <router-link :to="{ path: '/menu_tab', query: { id: 'menu_tab' } }">
        <div class="nav-list" :class="[userClick == 'menu_tab' ? 'nav-list-click' : '']">
          <div class="img-box"></div>
          <span class="nav_link title1"> Menu & Tab </span>
        </div>
      </router-link>
    </div>
    <router-link :to="{ path: '/draggable', query: { id: 'draggable' } }">
        <div class="nav-list" :class="[userClick == 'draggable' ? 'nav-list-click' : '']">
          <div class="img-box"></div>
          <span class="nav_link title1"> Draggable </span>
        </div>
      </router-link>
  </nav>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
const route = useRoute()

let routeQuery = computed(() => route.query)
let userClick = ref<any>()
watch(
  () => routeQuery.value,
  (value) => {
    userClick.value = value.id
    // console.log(userClick)
  }
)
</script>

<style lang="scss" scoped>
#Header-Bar {
  width: 100%;
  height: var(--pretso-header-height);
  position: fixed;
  top: 0;
  left: 0;
  padding-right: var(--pretso-header-height);
  background-color: var(--bs-dark-grey);
  // flex
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
  .title2 {
    color: #ffffff;
    margin-left: 5px;
    // transition: font-weight 0.1s;
  }
  .title2:hover {
    cursor: pointer;
  }
}
#Pretso-Logo {
  width: var(--pretso-navbar-weight);
  height: var(--pretso-header-height);
  background-color: var(--bs-pretso-blue);
  // cursor: pointer;
  // flex
  display: flex;
  align-items: center;
  justify-content: center;
}

.img-box {
  width: 25px;
  height: 25px;
  margin-right: 1.063rem;
  // flex
  display: flex;
  align-items: center;
  justify-content: center;
}
.nav-arrow-box {
  // width: 100%;
  height: 23px;
  margin-left: 15px;
  // flex
  display: flex;
  align-items: center;
}
</style>
