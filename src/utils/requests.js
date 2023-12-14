import Vue from 'vue'
import { axios } from '@/utils/request'
import { ACCESS_TOKEN } from '@/store/mutation-types'
import store from '@/store'

export const getRequest = (url, params) => {
  const accessToken = Vue.ls.get(ACCESS_TOKEN)
  return axios({
    method: 'get',
    url: url,
    params: params,
    headers: {
      isToken: false,
      'Authorization': accessToken
    }
  })
}
export const getModelRequest = (url, params) => {
  const modelToken = store.getters.modelToken
  return axios({
    method: 'get',
    url: url,
    params: params,
    headers: {
      'appid': 10003,
      'Authorization': modelToken
    }
  })
}
export const postModelRequest = (url, params) => {
  const modelToken = store.getters.modelToken
  return axios({
    method: 'post',
    url: url,
    data: JSON.stringify(params),
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'appid': 10003,
      'Authorization': modelToken
    }
  })
}

export const getRequestWithToken = (url, token) => {
  return axios({
    method: 'get',
    url: url,
    headers: {
      'Authorization': token
    }
  })
}

export const postRequest = (url, params) => {
  const accessToken = Vue.ls.get(ACCESS_TOKEN)
  return axios({
    method: 'post',
    url: url,
    data: JSON.stringify(params),
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'Authorization': accessToken
    }
  })
}

export const putRequest = (url, params) => {
  const accessToken = Vue.ls.get(ACCESS_TOKEN)
  return axios({
    method: 'put',
    url: url,
    data: JSON.stringify(params),
    // transformRequest: [function (data) {
    //     let ret = '';
    //     for (let it in data) {
    //         ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
    //     }
    //     return ret;
    // }],
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'Authorization': accessToken
    }
  })
}

export const deleteRequest = (url, params) => {
  const accessToken = Vue.ls.get(ACCESS_TOKEN)
  return axios({
    method: 'delete',
    url: url,
    params: params,
    headers: {
      'Authorization': accessToken
    }
  })
}

export const uploadFileRequest = (url, params) => {
  const accessToken = Vue.ls.get(ACCESS_TOKEN)
  return axios({
    method: 'post',
    url: url,
    params: params,
    headers: {
      'Authorization': accessToken
    }
  })
}
