import { getRequest, postRequest, deleteRequest, putRequest, batchDelRequest } from '@/utils/requests'
import api from '@/api'

export const getList = obj => {
  const restUrl = api.FileTypeUrl + `/pages`
  return getRequest(restUrl, obj)
}

export const add = obj => {
  return postRequest(api.FileTypeUrl, obj)
}

export const del = id => {
  const restUrl = api.FileTypeUrl + `/${id}`
  return deleteRequest(restUrl, {})
}

export const delByIds = ids => {
  const restUrl = api.FileTypeUrl + `/delByIds`
  return batchDelRequest(restUrl, { ids })
}

export const update = (obj) => {
  return putRequest(api.FileTypeUrl, obj)
}
