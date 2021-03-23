import * as types from './actionTypes'

const defaultState = {
  searchContent: '',
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
    case types.SAVE_SEARCHBAR_CONTENT:
      return {
        ...state,
        searchContent: action.payload
      }
    default:
      return state
  }
}

export default reducers
