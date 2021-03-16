import * as types from './actionTypes'
import { db } from "services/firebase"

const initList = list => ({
  type: types.GET_ARTICLE_LIST,
  payload: list
})

export const getArticleList = () => {
  return (dispatch) => {
    db
      .collection('article')
      .get()
      .then(snapshot => {
        const ArticleList = []
        snapshot.forEach(doc => {
          const data = doc.data()
          ArticleList.push(data)
        })
        dispatch(initList(ArticleList))
      })
      .catch(error => {
        console.log('Error getting documents', error)
      })
  }
}

export const showMoreList = () => ({
  type: types.SHOW_MORE_LISTS,
  payload: true
})
