import React, { useReducer }from 'react'

const initialstate = 0;
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialstate
        default:
            return state
    }
}
function Counter1() {
    
   const[count,dispatch]= useReducer(reducer,initialstate)
    return (
        <div>
            <div>count-{count}</div>
            <button onClick={()=>{dispatch('increment')}}>Increment</button>
            <button onClick={()=>{dispatch('decrement')}}>decrement</button>
            <button onClick={()=>{dispatch('reset')}}>reset</button>
        </div>
    )
}

export default Counter1
