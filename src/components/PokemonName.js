import React, { useEffect } from 'react';

const PokemonName = ({ pokemonName }) => {
  useEffect(() => {
    const doFetch = async () => {
      const pokeReponse = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
      );
      const pokeInfo = await pokeReponse.json();
      console.log(pokeInfo);
    };

    doFetch();
  }, [pokemonName]);

  return <div>Ditto</div>;
};

export default PokemonName;
