import * as types from './actionTypes'
import axios from 'axios'

const changeState = data => ({
  type: types.SEARCH_FOCUS,
  payload: {
    searchIsFocused: true,
    recommendList: data
  }
})

export const handleNavSearchFocus = () => {
  return (dispatch) => {
    axios.get('/api/recommendList.json')
      .then(response => {
        const data = response.data
        dispatch(changeState(data.data))
      })
      .catch(error => {
        console.error(error)
      })
  }
}

export const handleNavSearchBlur = () => ({
  type: types.SEARCH_BLUR,
  payload: false
})
