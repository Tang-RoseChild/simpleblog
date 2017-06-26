import axios from 'axios'
import store from '../store/index.js'
import Vue from 'vue'

Vue.prototype.$http = axios

axios.interceptors.request.use(function (config) {
  config.headers.authorization = store.state.token ? store.state.token : ''
  return config
})

axios.interceptors.response.use(function (response) {
  if (response.headers.authorization) {
    store.commit('saveToken', response.headers.authorization)
    localStorage.setItem('uid', response.headers.authorization)
  }
  return response
}, function (error) {
  return Promise.reject(error)
})

function post (url, data, callback, errCallback) {
  axios.post('/api' + url, data)
  .then(function (response) {
    if (callback) {
      callback(response)
    }
  })
  .catch(function (error) {
    if (errCallback) {
      errCallback(error)
    } else {
      console.log(error)
    }
  })
}

export function Login (data, callback) {
  post('/login', data, callback)
}

export function Register (data, callback) {
  post('/register', data, callback)
}

export function IssueToken (callback, errCallback) {
  post('/issue_token', null, callback, errCallback)
}

export function BlogUpload (data, callback) {
  post('/blog/upload', data, callback)
}

// need to include comments
export function BlogGet (data, callback) {
  post('/blog', data, callback)
}

export function BlogList (data, callback) {
  post('/blog/list', data, callback)
}

export function GetBlogComments (data, callback) {
  post('/comment/blog', callback)
}

export function CreateComment (data, callback) {
  post('/comment/create', data, callback)
}

export const Comment = {
  GetBlogComments,
  CreateComment
}
