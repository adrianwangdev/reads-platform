import * as types from "./actionTypes"

const defaultState = {
  userLogin: false,
  hasAccount: false,
  emailErrorMessage: '',
  passwordErrorMessage: ''
}

const reducers = (state = defaultState, action) => {
  switch (action.type) {
    case types.GET_USER_DATA:
      return {
        ...state,
        userLogin: action.payload
      }
    case types.USER_LOGOUT:
      return {
        ...state,
        userLogin: action.payload
      }
    case types.USER_HAS_ACCOUNT:
      return {
        ...state,
        hasAccount: action.payload
      }
    case types.USER_HAS_NOT_ACCOUNT:
      return {
        ...state,
        hasAccount: action.payload
      }
    default:
      return state
  }
}

export default reducers
