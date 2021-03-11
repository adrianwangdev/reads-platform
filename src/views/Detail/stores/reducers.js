import * as types from './actionTypes'

const defaultState = {
  title: '',
  content: ''
}

const reducers = (state = defaultState, action) => {
  switch (action.type) {
    case types.GET_DETAILL:
      return ({
        ...state,
        title: action.payload.title,
        content: action.payload.content
      })
    default:
      return state
  }
}

export default reducers
