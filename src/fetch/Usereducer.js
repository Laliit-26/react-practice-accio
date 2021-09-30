import React, { useState, useEffect,useReducer } from 'react'
import axios from 'axios'

const initialstate = {
    loading: true,
    error: '',
    post: {}
};

const reducer=(state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                post: action.payload,
                error: ''
            }
        case 'FETCH_ERROR':
            return {
                loading: false,
                post: {},
                error:'something went wrong'
            }
        default:
            return state
      }
}

function Usereducer() {

    
    const [state, dispatch] = useReducer(reducer, initialstate);
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .then((res) => {
          dispatch({ type: 'FETCH_SUCCESS', payload: res.data })
          console.log(res.data.title);
      })
      .catch((err) => {
        dispatch({type:'FETCH_ERROR'})
      })
  }, [])
 
  return (
    <div>
      {state.loading ? <h1>loading....:</h1> : state.post.title}
      {state.error ? state.error : null}
      {/* {console.log('inside return')} */}
    </div>
  )
}

export default Usereducer
