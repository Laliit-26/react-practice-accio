import React,{useState} from 'react'
import Welcome from './Welcome';

export const userContext = React.createContext()
function App_usecontext() {
    const [name, setName] = useState("lalit");
    return (
      <div>
        <userContext.Provider value={name}>
          hello world
          <Welcome name={name} />
        </userContext.Provider>
      </div>
    )
}

export default App_usecontext;
