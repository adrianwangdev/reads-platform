import * as types from './actionTypes'

const defaultState = {
  topicList: [],
  articleList: [],
  recommendList: [],
  writerList: []
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
    default:
      return state
  }
}

export default reducers
