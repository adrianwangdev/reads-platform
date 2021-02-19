import * as types from './actionTypes'

const defaultStata = {
  searchIsFocused: false,
  recommendList: []
}

const reducers = (state = defaultStata, action) => {
  switch (action.type) {
    case types.SEARCH_FOCUS:
      return {
        searchIsFocused: action.payload.searchIsFocused,
        recommendList: action.payload.recommendList
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
