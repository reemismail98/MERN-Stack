import React ,{useState , useEffect} from 'react'

const Pokemon = () => {
    const [pokomen, setPokemon] = useState([]);

    const clickHandler = (e) => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response => response.json())
            .then(response => setPokemon(response.results))
            .catch (err => console.log(err))
    };
 
    
    return (
        <div>
            <button onClick={clickHandler} >Fetch Pokemon</button>
            {pokomen.length > 0 && pokomen.map((pokomen, index)=>{
                return (<div key={index}>{pokomen.name}</div>)
            })}
        </div>
    );
}

export default Pokemon
