import * as types from './actionTypes'

const defaultState = {
  postList: [],
  articleTitle: '',
  articleContent: ''
}

const reducers = (state = defaultState, action) => {
  switch (action.type) {
    case types.GET_MY_POST_LIST:
      return {
        ...state,
        postList: action.payload
      }
    case types.EDIT_ARTICLE_TITLE:
      return {
        ...state,
        articleTitle: action.payload
      }
    case types.EDIT_ARTICLE_CONTENT:
      return {
        ...state,
        articleContent: action.payload
      }
    case types.CLEAR_INPUT_TEXT:
      return {
        ...state,
        articleTitle: action.payload.articleTitle,
        articleContent: action.payload.articleContent
      }
    default:
      return state
  }
}

export default reducers
