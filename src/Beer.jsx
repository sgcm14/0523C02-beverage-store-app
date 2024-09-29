import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Beer = () => {
    const [beer, setBeer] = useState(null);
    const params = useParams();
    const navigate = useNavigate();
    const defaultImage = "https://via.placeholder.com/150"; // Imagen predeterminada

    const getBeer = async () => {
        try {
            const res = await fetch(`https://api.sampleapis.com/beers/ale/${params.id}`);
            const data = await res.json();
            setBeer(data);
        } catch (error) {
            console.error("Error fetching the beer data:", error);
        }
    };

    useEffect(() => {
        getBeer();
    }, [params.id]);

    if (!beer) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h2>{beer.name}</h2>
            <div className='card'>
                <img 
                    src={beer.image} 
                    alt={beer.name} 
                    onError={(e) => e.target.src = defaultImage} // Mostrar imagen por defecto si falla la carga
                />
                <p><strong>Price:</strong> {beer.price}</p>
                <p><strong>Rating:</strong> {beer.rating.average.toFixed(4)} ({beer.rating.reviews} reviews)</p>
            </div>
            <button onClick={() => navigate(-1)}>Volver atrás</button>
        </div>
    );
};

export default Beer;