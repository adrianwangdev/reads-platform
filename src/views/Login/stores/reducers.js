import * as types from "./actionTypes"

const defaultState = {
  userLogin: false
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
    default:
      return state
  }
}

export default reducers
