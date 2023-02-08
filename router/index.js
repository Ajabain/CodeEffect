import { createRouter, createWebHistory } from 'vue-router/dist/vue-router.esm-bundler'
import Articles from '../src/views/Articles.vue'
import Audio from '../src/views/Audio.vue'



const routes = [
    {
      path : "/articles",
      name : "/articles",
      component : Articles
    },
    {
        path : "/audio",
        name : "audio",
        component : Audio
      },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
  })
  
  export default router