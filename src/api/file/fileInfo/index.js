import { getRequest, postRequest, deleteRequest, putRequest, batchDelRequest, getImgArray } from '@/utils/requests'
import api from '@/api'

export const getList = obj => {
  const restUrl = api.FileInfoUrl + `/pages`
  return getRequest(restUrl, obj)
}

export const getFileList = obj => {
  const restUrl = api.FileInfoUrl + `/getFileList`
  return getRequest(restUrl, obj)
}

export const add = obj => {
  return postRequest(api.FileInfoUrl, obj)
}

export const del = id => {
  const restUrl = api.FileInfoUrl + `/${id}`
  return deleteRequest(restUrl, {})
}

export const delByIds = ids => {
  const restUrl = api.FileInfoUrl + `/delByIds`
  return batchDelRequest(restUrl, { ids })
}

export const update = (obj) => {
  return putRequest(api.FileInfoUrl, obj)
}

export const download = obj => {
  const restUrl = api.FileInfoUrl + `/download/` + obj.fileId
  return getImgArray(restUrl, obj)
}

export const updateByBusiness = (obj, businessId) => {
  return putRequest(api.FileInfoUrl + '/updateByBusiness/' + businessId, obj)
}