import { createContext, useReducer } from 'react'

import got from '../assets/sounds/got.mp3'
import { useSound } from '../hooks'

export const StateContext = createContext({})
export const DispatchContext = createContext({})
export const SoundContext = createContext({})

const initialState = {
  isLoadingVisible: true,
  isMobileNavVisible: false,
}

function reducer(state, { type, payload }) {
  switch (type) {
    case 'SET_LOADING': {
      return {
        ...state,
        isLoadingVisible: payload,
      }
    }
    case 'SET_MOBILE_NAV_VISIBLE': {
      return {
        ...state,
        isMobileNavVisible: payload,
      }
    }
    default: {
      return state
    }
  }
}

export default function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)
  const sound = useSound(got, { loop: true })

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <SoundContext.Provider value={sound}>{children}</SoundContext.Provider>
      </DispatchContext.Provider>
    </StateContext.Provider>
  )
}
