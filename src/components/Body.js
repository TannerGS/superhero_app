import React, {useState} from 'react'

const Body = () => {
    let [name, setName] = useState('Superhero Name')

    return (
        <div>
            <h1>
                {name}
            </h1>
        </div>
    )
}

export default Body
