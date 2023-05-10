import { useContext } from 'react'

import { StateContext } from '../lib/context'

function useSelect(selector) {
  const state = useContext(StateContext)
  return typeof selector === 'function' ? selector(state) : state
}

export { useSelect }
