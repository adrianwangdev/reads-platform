import { useEffect } from 'react'

export const useRWD = (action) => {
  useEffect(() => {
    action()
  }, [action])
  useEffect(() => {
    window.addEventListener('resize', action)
    return (() => {
      window.addEventListener('resize', action)
    })
  }, [action])
}
