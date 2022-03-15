import React, {useState} from 'react'

const API = () => {
    const [allPokemon, setAllPokemon] = useState([])

    const fetchAllPokemon = async() => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=905`)
        const jsonResponse = await response.json()
        console.log(jsonResponse.results)
        setAllPokemon(jsonResponse.results)
    }

    return (
            <div>
                <button onClick={fetchAllPokemon}>Show All Pokemon</button>
                {
                    allPokemon.map((p, i) => {
                        return(
                            <div key={i}>
                                <p>{p.name}</p>
                            </div>
                        )
                    })
                }
            </div>
    )
}

export default API

