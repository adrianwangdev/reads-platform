import * as types from './actionTypes'

const defaultState = {
  downloadLists: []
}

const reducers = (state = defaultState, action) => {
  switch (action.type) {
    case types.USER_LOGIN:
      return {
        ...state,
        user: action.payload.user,
        userLogin: action.payload.userLogin
      }
    case types.GET_DOWNLOAD_LISTS:
      return {
        ...state,
        downloadLists: action.payload
      }
    default:
      return state
  }
}

export default reducers
