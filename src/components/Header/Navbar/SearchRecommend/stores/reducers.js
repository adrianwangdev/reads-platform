import * as types from './actionTypes'

const defaultState = {
  recommendList: [],
  page: 1,
  totalPage: 1,
  isMouseEnter: false
}

const reducers = (state = defaultState, action) => {
  switch (action.type) {
    case types.GET_RECOMMEND_LIST:
      return {
        ...state,
        recommendList: action.payload.recommendList,
        totalPage: action.payload.totalPage
      }
    case types.LIST_MOUSE_ENTER:
      return {
        ...state,
        isMouseEnter: action.payload
      }
    case types.LIST_MOUSE_LEAVE:
      return {
        ...state,
        isMouseEnter: action.payload
      }
    default:
      return state
  }
}

export default reducers
