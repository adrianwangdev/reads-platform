import * as types from './actionTypes'
import fire from '../../../firebase'

const updateEmailErrorMessage = (errorMessage) => ({
  type: types.SET_EMAIL_ERROR_MESSAGE,
  payload: errorMessage
})

const updatePasswordErrorMessage = (errorMessage) => ({
  type: types.SET_PASSWORD_ERROR_MESSAGE,
  payload: errorMessage
})

const userLoginSuccess = (userInfo) => ({
  type: types.USER_LOGIN,
  payload: {
    user: userInfo,
    userLogin: true
  }
})

const userLogoutSuccess = () => ({
  type: types.USER_LOGOUT,
  payload: {
    user: null,
    userLogin: false
  }
})

export const handleHasAccount = () => ({
  type: types.USER_HAS_ACCOUNT,
  payload: true
})

export const handleHasNotAccount = () => ({
  type: types.USER_HAS_NOT_ACCOUNT,
  payload: false
})

export const handleUserSignup = (accountElement, passwordElement) => {
  const account = accountElement.value
  const password = passwordElement.value

  return (dispatch) => {
    fire
      .auth()
      .createUserWithEmailAndPassword(account, password)
      .then(response => {
        dispatch(userLoginSuccess(response.user))
      })
      .catch(error => {
        switch (error.code) {
          case 'auth/invalid-email':
            dispatch(updateEmailErrorMessage('請確認 Email 格式是否正確'))
            break
          case 'auth/email-already-in-use':
            dispatch(updateEmailErrorMessage('此帳號已是 Reads 會員'))
            break
          case 'auth/weak-password':
            dispatch(updatePasswordErrorMessage('密碼需至少大於 6 個字元'))
            break
          default:
            console.warn(error.message)
        }
      })
  }
}

export const handleUserLogin = (accountElement, passwordElement) => {
  const account = accountElement.value
  const password = passwordElement.value

  return (dispatch) => {
    fire
      .auth()
      .signInWithEmailAndPassword(account, password)
      .then(response => {
        dispatch(userLoginSuccess(response.user))
      })
      .catch(error => {
        switch (error.code) {
          case 'auth/invalid-email':
            dispatch(updateEmailErrorMessage('請確認 Email 格式是否正確'))
            break
          case 'auth/user-not-found':
            dispatch(updateEmailErrorMessage('此帳號非 Reads 會員'))
            break
          case 'auth/wrong-password':
            dispatch(updatePasswordErrorMessage('您輸入的密碼有誤，請重新確認'))
            break
          default:
            console.warn(error.message)
        }
      })
  }
}

export const handleUserLogout = () => {
  return (dispatch) => {
    fire.auth().signOut().then(() => {
      dispatch(userLogoutSuccess())
    })
  }
}
