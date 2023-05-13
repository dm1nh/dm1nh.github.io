import { createContext, useReducer } from 'react'

export const StateContext = createContext({})
export const DispatchContext = createContext({})

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

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  )
}
