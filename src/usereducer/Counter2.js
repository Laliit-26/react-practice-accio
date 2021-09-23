import React, { useReducer } from 'react'

const initialstate = {
    firstcounter:0
}
const reducer = (state, action) => {
  switch (action.type) {
      case 'increment':
          return { firstcounter: state.firstcounter + action.value }
    case 'decrement':
      return { firstcounter: state.firstcounter - action.value }
    case 'reset':
      return initialstate
    default:
      return state
  }
}
function Counter2() {
  const [count, dispatch] = useReducer(reducer, initialstate)
  return (
    <div>
      <div>count-{count.firstcounter}</div>
      <button
        onClick={() => {
          dispatch({ type: 'increment', value: 1 })
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'decrement',value:1 })
        }}
      >
        decrement
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'increment',value:5 })
        }}
      >
        Increment 5
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'decrement',value:5 })
        }}
      >
        decrement 5
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'reset' })
        }}
      >
        reset
      </button>
    </div>
  )
}

export default Counter2
