import * as types from './actionTypes'

const defaultState = {
  moreArticleLists: [],
  showMoreButton: true
}

const reducers = (state = defaultState, action) => {
  switch (action.type) {
    case types.GET_MORE_LISTS:
      return {
        ...state,
        moreArticleLists: action.payload.moreArticleLists,
        showMoreButton: action.payload.showMoreButton
      }
    default:
      return state
  }
}

export default reducers
