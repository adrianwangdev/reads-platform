import * as types from './actionTypes'

export const handleNavSearchFocus = () => ({
  type: types.SEARCH_FOCUS,
  payload: true
})
export const handleNavSearchBlur = () => ({
  type: types.SEARCH_BLUR,
  payload: false
})
