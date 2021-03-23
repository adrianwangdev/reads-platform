import * as types from './actionTypes'
import { db } from "services/firebase"

const initPostList = list => ({
  type: types.GET_MY_POST_LIST,
  payload: list
})

const clearInputText = () => ({
  type: types.CLEAR_INPUT_TEXT,
  payload: {
    articleTitle: '',
    articleContent: ''
  }
})

export const getMyPostList = () => {
  return (dispatch) => {
    db
      .collection('post')
      .get()
      .then(snapshot => {
        const postList = []
        snapshot.forEach(doc => {
          const data = doc.data()
          postList.push(data)
        })
        dispatch(initPostList(postList))
      })
      .catch(error => {
        console.log('Error getting documents', error)
      })
  }
}

export const handleChangeArticleTitle = element => {
  return {
    type: types.EDIT_ARTICLE_TITLE,
    payload: element.value
  }
}

export const handleChangeArticleContent = editor => {
  const articleContent = editor.getData()
  return {
    type: types.EDIT_ARTICLE_CONTENT,
    payload: articleContent
  }
}

export const handleSubmitPost = (title, content) => {
  const myPost = {
    title,
    content,
    createTime: Date.now()
  }
  return (dispatch) => {
    db
      .collection('post')
      .add(myPost)
      .then(response => {
        dispatch(clearInputText())
      })
      .catch(error => {
        console.log('Error posting documents', error)
      })
  }
}
