import React, { useEffect, useState } from "react";
import Card from "./components/Card";

const Home = () => {
  const [beers, setBeers] = useState([]);
  const defaultImage = "https://via.placeholder.com/150"; // Imagen predeterminada

  const getBeers = async () => {
    const res = await fetch("https://api.sampleapis.com/beers/ale");
    const data = await res.json();
    console.log(data);
    setBeers(data);
  };

  useEffect(() => {
    getBeers();
  });

  return (
    <div className="grid">
      {beers.length
        ? beers.map((beer) => (
            <Card
              key={beer.id}
              data={beer}
              defaultImage={defaultImage} // Pasar la imagen predeterminada como prop
            />
          ))
        : null}
    </div>
  );
};

export default Home;
