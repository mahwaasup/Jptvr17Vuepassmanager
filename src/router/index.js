import Vue from 'vue'
import VueRouter from 'vue-router'
import WelcomeComponent from '@/components/WelcomeComponent'
import LoginComponent from '@/components/auth/LoginComponent.vue'
import LogoutComponent from '@/components/auth/LogoutComponent.vue'
import  RegistrationComponent  from  '@/components/auth/RegistrationComponent.vue'
import MypassComponent from '@/components/MypassComponent.vue'
import ProfileComponent from '@/components/ProfileComponent.vue'
import AddResourceComponent from '@/components/AddResourceComponent.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: WelcomeComponent
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginComponent
  },
  {
    path: '/registration',
    name: 'Registration',
    component: RegistrationComponent
  },
   {
   path: '/mypass',
   name: 'MyPass',
   component: MypassComponent  
 },
  {
    path: '/logout',
    name: 'Logout',
    component: LogoutComponent
  },
  {
    path: '/addResource',
    name: 'AddResource',
    component: AddResourceComponent
  },
  {
    path: '/profile',
    name: 'Profile',
    component: ProfileComponent  
  },
]

const router = new VueRouter({
  routes
})

export default router
