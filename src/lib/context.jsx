import { createContext, useReducer } from 'react'

export const StateContext = createContext({})
export const DispatchContext = createContext({})

const initialState = {
  isLoadingVisible: true,
}

function reducer(state, { type, payload }) {
  switch (type) {
    case 'SET_LOADING': {
      return {
        ...state,
        isLoadingVisible: payload,
      }
    }
    default: {
      return state
    }
  }
}

export function _setLoading(value) {
  return {
    type: 'SET_LOADING',
    payload: value,
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
