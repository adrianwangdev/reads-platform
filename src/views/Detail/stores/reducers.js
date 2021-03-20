import * as types from './actionTypes'

const defaultState = {
  articleDetail: {}
}

const reducers = (state = defaultState, action) => {
  switch (action.type) {
    case types.GET_DETAIL:
      return ({
        ...state,
        articleDetail: action.payload
      })
    default:
      return state
  }
}

export default reducers
