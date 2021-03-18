import { useEffect } from 'react'
import { auth } from 'services/firebase'

export const useWatch = (watchAction) => {
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      user && watchAction(user)
    })
  }, [])
}
