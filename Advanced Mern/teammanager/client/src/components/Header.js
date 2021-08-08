import React from 'react'
import { Link, navigate } from '@reach/router'


const Header = () => {
    return (
        <div>
          <h3><Link to="">Manage Playres</Link> | <Link to="status/game/:id"> Manage Player Status</Link></h3>
            <h2><Link to="/managers">List </Link> | <Link to="new">Add Player</Link></h2>
            <table></table>  
        </div>
    )
}

export default Header
