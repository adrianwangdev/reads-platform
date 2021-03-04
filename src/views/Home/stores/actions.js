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
