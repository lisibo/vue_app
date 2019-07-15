import router from './router'
import store from './store'
import {getToken} from '@/utlis/auth'

console.log(getToken())
const whiteList = ['/login']
// router.beforeEach((to,from,next)=>{
//   if(to.path === '/mine'&&!getToken()){

//     next(`/login?redirect=${to.path}`)
//   }else{
//     next()
//   }
// })

// router.beforeEach(async(to,from,next)=>{
//   console.log(to)
//   next(false)
// })