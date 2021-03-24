import * as types from './actionTypes'
import {db} from "services/firebase"

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
    db
      .collection('trendingTopic')
      .get()
      .then(snapshot => {
        let homeLists = {}
        snapshot.forEach(doc => {
          homeLists = doc.data()
        })
        dispatch(updateLists(homeLists))
      })
      .catch(error => {
        console.log('Error getting documents', error)
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
