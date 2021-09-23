import React,{useContext} from 'react'
import { userContext } from './App_usecontext'

function User() {
    const name = useContext(userContext);
    // return (
    //     <>
    //   <userContext.Consumer>
    //    {(name)=>{
    //     return( 
    //             <div>
    //                 user{name}
    //             </div>  
    //     )}
    //    }
    //     </userContext.Consumer>
    //         <div>i am from user</div>
    //         </>   )
    return (
        <div>
            user{name}
        </div>
    )
}

export default User
