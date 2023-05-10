import { useContext } from 'react'

import { DispatchContext } from '../lib/context'

function useDispatch() {
  return useContext(DispatchContext)
}

export { useDispatch }
