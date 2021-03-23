import * as types from './actionTypes'

export const handleNavSearchFocus = () => ({
  type: types.SEARCH_FOCUS,
  payload: true
})

export const handleNavSearchBlur = () => ({
  type: types.SEARCH_BLUR,
  payload: false
})

export const handleNavSearch = element => ({
  type: types.SAVE_SEARCHBAR_CONTENT,
  payload: element.value
})
