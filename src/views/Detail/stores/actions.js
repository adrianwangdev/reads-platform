import * as types from './actionTypes'
import axios from 'axios'

const updateLists = data => ({
  type: types.GET_DETAIL,
  payload: {
    title: data.title,
    content: data.content
  }
})

export const getDetail = id => {
  return (dispatch) => {
    axios.get(`/api/detail.json?id=${id}`)
      .then(response => {
        const { data } = response.data
        dispatch(updateLists(data))
      })
      .catch(error => {
        console.warn(error)
      })
  }
}
