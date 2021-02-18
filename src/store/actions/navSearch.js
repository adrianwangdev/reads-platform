import {
  SEARCH_FOCUS,
  SEARCH_BLUR
} from '../types'

export const handleNavSearchFocus = () => ({
  type: SEARCH_FOCUS,
  payload: true
})
export const handleNavSearchBlur = () => ({
  type: SEARCH_BLUR,
  payload: false
})
