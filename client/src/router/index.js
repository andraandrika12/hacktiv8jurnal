import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterView from '../views/RegisterView.vue'
import LoginView from '../views/LoginView.vue'
import PostView from '../views/PostView.vue'
import UserProfileView from '../views/UserProfileView.vue'
import Chat from '../components/Chat.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/post',
      name: 'post',
      component: PostView
    },
    {
      path: '/userProfile/:id',
      name: 'userProfile',
      component: UserProfileView
    },
    {
      path: '/chatRoom',
      name: 'chatRoom',
      component: Chat
    },
  ]
})

router.beforeEach(async (to, from, next) => {
  const accessLogin = localStorage.getItem('access_token');

  if (!accessLogin && to.path !== '/login' && to.path !== '/register' && to.path !== '/') {
    next('/');
  } else if (accessLogin && to.path === '/login') {
    next(from.path === '/post' ? '/post' : from.path);
  } else {
    next();
  }
})



export default router
