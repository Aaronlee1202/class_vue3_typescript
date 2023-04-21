import { createRouter, createWebHistory } from 'vue-router'
import PolesView from '../views/PolesView.vue'
import EventsView from '../views/EventsView.vue'
import Btn_Font from '../views/pretso/Btn_Font.vue'
import Menu_Tab from '../views/pretso/Menu_Tab.vue'
import DraggableView from '@/views/DraggableView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'PolesView',
      component: PolesView,
      props: (route) => ({ query: route.query.id })
    },
    {
      path: '/btn_font',
      name: 'Btn_Font',
      component: Btn_Font,
      props: (route) => ({ query: route.query.id })
    },
    {
      path: '/menu_tab',
      name: 'Menu_Tab',
      component: Menu_Tab,
      props: (route) => ({ query: route.query.id })
    },
    {
      path: '/events',
      name: 'EventsView',
      component: EventsView,
      props: (route) => ({ query: route.query.id })
    },
    {
      path: '/draggable',
      name: 'DraggableView',
      component: DraggableView,
      props: (route) => ({ query: route.query.id })
    }
  ]
})

export default router
