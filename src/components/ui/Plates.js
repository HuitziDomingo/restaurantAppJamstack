import React from 'react'

const Plates = ({ plat }) => {
    let { name } = plat
    return (
        <div className="w-full px-3 mb-4">
            <h1>{name}</h1>
        </div>
    )
}

export default Plates