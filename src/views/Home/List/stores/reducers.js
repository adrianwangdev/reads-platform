import * as types from './actionTypes'

const defaultState = {
  articleList: [],
  filteredList: [],
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
    case types.UPDATE_FILTER_LIST:
      return {
        ...state,
        filteredList: action.payload
      }
    default:
      return state
  }
}

export default reducers
