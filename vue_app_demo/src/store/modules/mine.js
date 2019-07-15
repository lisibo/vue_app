import Cookies from 'js-cookie'
const state = {
  tokenKey:'admin-token',
  username:'admin',
  password:'123'
}

const mutations = {
  LOGIN(state,userInfo){
    const {username,password} = userInfo
    if(username === state.username && password === state.password){
      Cookies.set('TOKEN',state.tokenKey)
    }
  }
}

const actions = {
  login(context,userInfo){
    context.commit('LOGIN',userInfo)
  }
}

export default {
  namespaced:true,
  state,
  mutations,
  actions
}