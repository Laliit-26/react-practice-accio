import React from 'react'
import { useReducer } from 'react'

const initialstate = {
    count:0
}

const reducer = (state,action) => {
    switch (action.type) {
        case 'INCREMENT':
            {
                console.log('increment')
                console.log(state.count);
                return {count :state.count + action.value }
            }
        case 'DECREMENT': {
            return {count:state.count-action.value}
        }
        default: {
            return state;
            }
    }
}
function CounterPractice() {
    const [currstate, dispatch] = useReducer(reducer, initialstate);
    return (
        <div>
            <h1>{currstate.count}</h1>
            <button onClick={() => dispatch({type: 'INCREMENT',value:2})}>increment</button>
            <button onClick={() => dispatch({type: 'DECREMENT',value:3})}>decrement</button>
        </div>
    )
}

export default CounterPractice
