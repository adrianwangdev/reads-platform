import * as types from './actionTypes'

const defaultState = {
  searchIsFocused: false
}

const reducers = (state = defaultState, action) => {
  switch (action.type) {
    case types.SEARCH_FOCUS:
      return {
        ...state,
        searchIsFocused: action.payload
      }
    case types.SEARCH_BLUR:
      return {
        ...state,
        searchIsFocused: action.payload
      }
    default:
      return state
  }
}

export default reducers
