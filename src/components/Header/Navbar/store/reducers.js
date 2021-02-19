import * as types from './actionTypes'

const defaultStata = {
  searchIsFocused: false
}

const reducers = (state = defaultStata, action) => {
  switch (action.type) {
    case types.SEARCH_FOCUS:
      return {
        ...defaultStata,
        searchIsFocused: action.payload
      }

    case types.SEARCH_BLUR:
      return {
        ...defaultStata,
        searchIsFocused: action.payload
      }
    default:
      return state
  }
}

export default reducers
