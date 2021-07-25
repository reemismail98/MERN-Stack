import axios from 'axios';
import React , {useState} from 'react'

const Pokemon = () => {
    const [pokemon,setPokemon]=useState([]);
    const clickHandler= (e) =>{
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
        
            .then(response =>{ setPokemon(response.data.results)
            console.log(response)})
    }
    return (
        <div>
            <button onClick={clickHandler} >Fetch Pokemon</button>
           {pokemon.length > 0 && pokemon.map((pokomen, index)=>{
                return (<div key={index}>{pokomen.name}</div>)
            })}
        </div>
    )
}

export default Pokemon
