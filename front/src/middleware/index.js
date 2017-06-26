import store from '../store/index.js'

let needToLogin = function (to, from, next) {
  console.log('need to loing middleware')
  if (to.path !== '/login' && !store.getters.isLogined) {
    next('/login')
  } else {
    next()
  }
}

export default {needToLogin}
export {needToLogin}

