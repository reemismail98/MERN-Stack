import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ManagerList from '../components/ManagerList';
const Main = () => {
    const [manager, setManager] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/managers')
            .then(res=>{
                setManager(res.data);
                setLoaded(true);
            });
    },[])

    const removeFromDom = managerId => {
        setManager(manager.filter(manager => manager._id !== managerId));
    }
    return (
        <div>

           {loaded && <ManagerList manager={manager} removeFromDom={removeFromDom}/>}
        </div>
 )
 }
export default Main