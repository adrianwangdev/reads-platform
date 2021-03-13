import * as types from './actionTypes'
import axios from 'axios'

const updateLoginState = () => ({
  type: types.GET_USER_DATA,
  payload: true
})

export const handleUserLogin = (accountElement, passwordElement) => {
  const account = accountElement.value
  const password = passwordElement.value

  return (dispatch) => {
    axios.get(`/api/login.json?account=${account}&password=${password}`)
      .then(response => {
        const { data } = response.data
        data ? dispatch(updateLoginState()) : alert('登入失敗')
      })
      .catch(error => {
        console.warn(error)
      })
  }
}

export const userLogout = () => ({
  type: types.USER_LOGOUT,
  payload: false
})

export const handleHasAccount = () => ({
  type: types.USER_HAS_ACCOUNT,
  payload: true
})

export const handleHasNotAccount = () => ({
  type: types.USER_HAS_NOT_ACCOUNT,
  payload: false
})
