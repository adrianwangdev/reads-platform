import * as types from './actionTypes'
import axios from 'axios'

const updateLists = moreLists => ({
  type: types.GET_MORE_LISTS,
  payload: {
    moreArticleLists: moreLists,
    showMoreButton: false
  }
})

export const getMoreLists = () => {
  return (dispatch) => {
    axios.get('/api/moreLists.json')
      .then(response => {
        const { data } = response.data
        dispatch(updateLists(data))
      })
      .catch(error => {
        console.warn(error)
      })
  }
}
