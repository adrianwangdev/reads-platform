import * as types from './actionTypes'
import axios from 'axios'

const updateLists = data => ({
  type: types.GET_DOWNLOAD_LISTS,
  payload: data
})

export const getDownloadLists = () => {
  return (dispatch) => {
    axios.get('/api/downloadList.json')
      .then(response => {
        const { data } = response.data
        dispatch(updateLists(data))
      })
      .catch(error => {
        console.warn(error)
      })
  }
}
