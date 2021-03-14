import * as types from "./actionTypes"

const defaultState = {
  user: null,
  userLogin: false,
  hasAccount: false,
  emailErrorMessage: '',
  passwordErrorMessage: ''
}

const reducers = (state = defaultState, action) => {
  switch (action.type) {
    case types.USER_LOGIN:
      return {
        ...state,
        user: action.payload.user,
        userLogin: action.payload.userLogin
      }
    case types.USER_LOGOUT:
      return {
        ...state,
        user: action.payload.user,
        userLogin: action.payload.userLogin
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
    case types.SET_EMAIL_ERROR_MESSAGE:
      return {
        ...state,
        emailErrorMessage: action.payload
      }
    case types.SET_PASSWORD_ERROR_MESSAGE:
      return {
        ...state,
        passwordErrorMessage: action.payload
      }
    default:
      return state
  }
}

export default reducers
