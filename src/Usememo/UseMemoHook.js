import React,{useState,useMemo} from 'react'
import Child from './Child';

function UseMemoHook() {
    const [counter1, setcounter1] = useState(0);
    const [counter2, setcounter2] = useState(0);

    const set1 = () => {
        setcounter1(counter1 + 1);
    }
     const set2 = () => {
       setcounter2(counter2 + 1)
     }
        // const person = {
        //   fname: 'lalit',
        //   lname: 'tiwari',
        // }
    const iseven = useMemo(() => {
        let i = 0;
        while (i < 1000000000)
            i++;
        return counter1 % 2 === 0;
    }, [counter1]);
    // const iseven = () => {
    //    let i = 0
    //    while (i < 1000000000) i++
    //    return counter1 % 2 === 0
    // }
    return (
      <div>
        {/* <h2>{state}</h2>
            <button onClick={() => { setstate((state)=>state + 1)}}>increment</button>
            <Child person={memochild} /> */}
            <button onClick={() => set1()}>increment 1:{counter1}</button>
            <span>{iseven ? <h1>even</h1>:<h1>odd</h1> }</span>
            <button onClick={() => set2()}>increment 2:{counter2}</button>
      </div>
    )
}
export default UseMemoHook
