import * as types from './actionTypes'

const defaultState = {
  moreArticleLists: []
}

const reducers = (state = defaultState, action) => {
  switch (action.type) {
    case types.GET_MORE_LISTS:
      return {
        ...state,
        moreArticleLists: action.payload
      }
    default:
      return state
  }
}

export default reducers
