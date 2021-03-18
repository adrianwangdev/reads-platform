import * as types from './actionTypes'
import { db } from 'services/firebase'

const updateLists = list => ({
  type: types.GET_DOWNLOAD_LISTS,
  payload: list
})

export const getDownloadLists = () => {
  return (dispatch) => {
    db
      .collection('downloadList')
      .get()
      .then(snapshot => {
        const downloadList = []
        snapshot.forEach(doc => {
          const data = doc.data()
          downloadList.push(data)
        })
        dispatch(updateLists(downloadList))
      })
      .catch(error => {
        console.log('Error getting documents', error)
      })
  }
}

export const keepUserLogin = current => {
  return (dispatch) => {
    dispatch({
      type: types.USER_LOGIN,
      payload: {
        user: current,
        userLogin: true
      }
    })
  }
}
