import * as types from './actionTypes'
import axios from 'axios'
import { useEffect } from 'react'

const updateList = data => ({
  type: types.GET_RECOMMEND_LIST,
  payload: {
    recommendList: data,
    totalPage: Math.ceil(data.length / 10)
  }
})

export const getRecommendList = () => {
  return (dispatch) => {
    axios.get('/api/recommendList.json')
      .then(response => {
        const data = response.data
        dispatch(updateList(data.data))
      })
      .catch(error => {
        console.error(error)
      })
  }
}

export const handleListMouseEnter = () => ({
  type: types.LIST_MOUSE_ENTER,
  payload: true
})

export const handleListMouseLeave = () => ({
  type: types.LIST_MOUSE_LEAVE,
  payload: false
})
