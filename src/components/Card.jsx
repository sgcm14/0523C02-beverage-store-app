import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({data}) => {
  return (
    <div className='card'>
        <h3>{data.name}</h3>
        <p>{data.price}</p>
        <img src={data.image} alt="beer-detail" />
        <p>{data.rating.average.toFixed(2)}</p>
        <Link to={"/beer/" + data.id}>
        <button>Ver detalle</button>
      </Link>
    </div>
  )
}

export default Card