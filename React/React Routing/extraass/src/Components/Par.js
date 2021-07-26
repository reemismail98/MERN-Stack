import React from 'react'

const Par = (props) => {
        const {par} = props;

    return (
        <div>
          {
            isNaN(par)? `The word is: ${par}` : `The number is: ${par}`
          }
        </div>
    )
}

export default Par
