import React,{useRef,useEffect,useState} from 'react'

function App_useref() {
    const inpref = useRef(null);
    const [name, setname] = useState("lalit");
    

    // useEffect(() =>
    // {
    //     inpref.current.innerHTML='hello guys';
    //     console.log(inpref.current.innerHTML);
    //     console.log("from useeffect");
    //           console.log({ name })
    //      setname('ravi')
    //     console.log({ name });
    // })
    const callfn = () => {
        inpref.current.innerHTML = 'hello guys';
    }
    return (
      <div>
        {/* <input placeholder="enter your text here" ref={inpref} /> */}
        <h1 ref={inpref}>hoiii guys</h1>
            {console.log({ name })}
            <button onClick={callfn}></button>
        {console.log('inside return')}
      </div>
    )
}

export default App_useref
                                                                                                                                                            