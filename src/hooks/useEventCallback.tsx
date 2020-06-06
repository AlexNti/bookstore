import {useCallback, useEffect, useRef} from 'react'

const useEventCallback = <T extends (...args: any[]) => any>(fn: T) => {
  const ref = useRef<T>(fn)

  useEffect(() => {
    ref.current = fn
  }, [fn])

  return useCallback((...args: any[]) => {
    return ref.current(...args)
  }, [])
}

export default useEventCallback
