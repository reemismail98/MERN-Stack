import React , {useState ,useEffect} from 'react'
import axios from 'axios'


const People = (props) => {
    const [showData , setShowData] = useState('')
    const {wars , id} = props
    useEffect(() => {
        axios.get('http://swapi.dev/api/' + wars + '/'+ id)
        .then(response => {
          setShowData(response.data);
          console.log(response.data)
        })
    }, [wars,id])

    return (
        <div>
            <h2>{showData.name}</h2>
            {
                Object.keys(showData).map((value , index)=>{
                    return index < 5 && index>0 ? <p key={index}>{value} : {showData[value]}</p> : null
                })
            }
        </div>
    )
}

export default People
