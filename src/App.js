import React,{useState} from 'react';
import './App.css';
import Welcome from './Welcome';


 export const userContext = React.createContext();
function App() {

  const [name, setname] = useState("lalit");

  return (
    <userContext.Provider value={name}>
      hello world
        <Welcome name={name} />
      </userContext.Provider>
  )
}

export default App;
