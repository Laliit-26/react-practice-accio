import React from 'react'

function Child(props) {
    console.log(props);
    return (
        <div>
            hii
            <h1>{props.person.fname}</h1>

            {console.log("child rendering")}
        </div>
    )
}

export default Child
