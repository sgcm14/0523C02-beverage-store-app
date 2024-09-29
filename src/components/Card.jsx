import React from "react";
import { Link } from "react-router-dom";

const Card = ({ data, defaultImage }) => {
  console.log(data);
  return (
    <div className="card">
      <h3>{data.name}</h3>
      <p>{data.price}</p>
      <img
        src={data.image}
        alt={data.name}
        onError={(e) => (e.target.src = defaultImage)} // Usar la imagen predeterminada si ocurre un error
      />
      <p>{data.rating.average}</p>
      <Link to={`/beer/${data.id}`}>
        <button>Ver detalle</button>
      </Link>
    </div>
  );
};

export default Card;
