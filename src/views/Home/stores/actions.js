import * as types from './actionTypes'
import axios from 'axios'

const updateLists = data => ({
  type: types.GET_HOME_LISTS,
  payload: {
    topicList: data.topicList,
    articleList: data.articleList,
    recommendList: data.recommendList,
    writerList: data.writerList
  }
})

export const getHomeLists = () => {
  return (dispatch) => {
    axios.get('/api/homeLists.json')
      .then(response => {
        const { data } = response.data
        dispatch(updateLists(data))
      })
      .catch(error => {
        console.warn(error)
      })
  }
}

export const toggleTopVisible = () => (
  document.documentElement.scrollTop > 240
    ? ({
      type: types.TOGGLE_TOP_BUTTON_VISIBLE,
      payload: true
    })
    : ({
      type: types.TOGGLE_TOP_BUTTON_VISIBLE,
      payload: false
    })
)

export const keepUserLogin = current => {
  return (dispatch) => {
    dispatch({
      type: types.USER_LOGIN,
      payload: {
        user: current,
        userLogin: true
      }
    })
  }
}

export const toggleDevice = () => (
  window.innerWidth < 960
    ? ({
      type: types.TOGGLE_DEVICE_TO_MOBILE,
      payload: true
    })
    : ({
      type: types.TOGGLE_DEVICE_TO_MOBILE,
      payload: false
    })
)
