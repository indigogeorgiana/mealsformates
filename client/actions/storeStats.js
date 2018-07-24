import request from 'superagent'
import {showError} from './'

export const REQUEST_STATS = 'REQUEST_STATS'
export const RECEIVE_STATS = 'RECEIVE_STATS'

const requestStoreStats = () => {
  return {
    type: REQUEST_STATS
  }
}

const receiveStoreStats = (balance) => {
  return {
    type: RECEIVE_STATS,
    balance
  }
}

export function getStoreStats (id) {
  return dispatch => {
    dispatch(requestStoreStats())
    return request
      .get(`/api/v1/store/${id}/donationRedemption`)
      .then(res => {
        dispatch(receiveStoreStats(res.body))
      })
      .catch(() => {
        dispatch(showError('An unexpected error has occurred'))
      })
  }
}
