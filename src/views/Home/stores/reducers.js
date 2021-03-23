import * as types from './actionTypes'

const defaultState = {
  isMobile: false,
  topicList: [],
  articleList: [],
  recommendList: [],
  writerList: [],
  showTopButton: false
}

const reducers = (state = defaultState, action) => {
  switch (action.type) {
    case types.GET_HOME_LISTS:
      return {
        ...state,
        topicList: action.payload.topicList,
        articleList: action.payload.articleList,
        recommendList: action.payload.recommendList,
        writerList: action.payload.writerList
      }
    case types.TOGGLE_TOP_BUTTON_VISIBLE:
      return {
        ...state,
        showTopButton: action.payload
      }
    case types.TOGGLE_DEVICE_TO_MOBILE:
      return {
        ...state,
        isMobile: action.payload
      }
    default:
      return state
  }
}

export default reducers
