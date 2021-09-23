import React,{useRef,useEffect,useState} from 'react'

function App_useref() {
    const inpref = useRef(null);
    const [name, setname] = useState("lalit");
    

    useEffect(() =>
    {
        inpref.current.focus();
        console.log("from useeffect");
              console.log({ name })
         setname('ravi')
        console.log({ name });
    })
    return (
        <div>
            <input placeholder="enter your text here" ref={inpref} />
            {name}
            {console.log("inside return")}
        </div>
    )
}

export default App_useref
