import { getModelRequest, postModelRequest } from '@/utils/requests'
const api = {
  useCodeApi: '/bridgeApp/access/userCode',
  snapshotApi: '/Data/Snapshot'
}

export const getUseCode = obj => {
  const restUrl = api.useCodeApi
  return postModelRequest(restUrl, obj)
}

export const getSnapShot = obj => {
  const restUrl = api.snapshotApi
  return getModelRequest(restUrl, obj)
}
