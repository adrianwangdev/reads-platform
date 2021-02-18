import {
  SEARCH_FOCUS,
  SEARCH_BLUR
} from '../types'

const defaultStata = {
  searchIsFocused: false
}

const reducer = (state = defaultStata, action) => {
  switch (action.type) {
    case SEARCH_FOCUS:
      return {
        ...defaultStata,
        searchIsFocused: action.payload
      }
    
    case SEARCH_BLUR:
      return {
        ...defaultStata,
        searchIsFocused: action.payload
      }
    default:
      return state
  }
}

export default reducer
