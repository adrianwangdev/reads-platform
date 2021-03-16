import * as types from './actionTypes'

const defaultState = {
  articleList: [],
  showMore: false
}

const reducers = (state = defaultState, action) => {
  switch (action.type) {
    case types.GET_ARTICLE_LIST:
      return {
        ...state,
        articleList: action.payload
      }
    case types.SHOW_MORE_LISTS:
      return {
        ...state,
        showMore: action.payload
      }
    default:
      return state
  }
}

export default reducers
