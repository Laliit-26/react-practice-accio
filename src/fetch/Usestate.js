import React,{useState,useEffect} from 'react'
import axios from 'axios';
function Usestate() {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts/1')
        .then((res) => {
            
            
            setData(res.data);
            console.log('after setting data')
            setLoading(false);
           console.log('after setting loading')
            setError('');

      })
        .catch((err) => {
            setLoading(false);
            setData({});
            
            setError('something went wrong')
      })
},[])


    return (
        <div>
            {loading ? <h1>loading....:</h1> : data.title}
            {error ? error : null}
            {console.log("inside return")}
            
        </div>
    )
}

export default Usestate;
