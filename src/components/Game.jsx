import { useEffect, useState } from "react";
import "../styles/game.css";

export default function Game() {
  const pokemonBackground = "../src/assets/video/pokemon-emerald-waterfall.mp4";

  const [pokemons, setPokemons] = useState([]);

  const REFERENCE_WIDTH = 1920;
  const REFERENCE_HEIGHT = 1080;

  const elements = [
    { id: 1, x: 510, y: 420, content: pokemons[0] },
    { id: 2, x: 1305, y: 620, content: pokemons[1] },
    { id: 3, x: 760, y: 975, content: pokemons[2] },
    { id: 4, x: 1530, y: 830, content: pokemons[3] },
  ];

  useEffect(() => {
    async function loadPokemons() {
      const result = await fetchPokemons(4);
      setPokemons(result);
    }

    loadPokemons();
  }, []);

  return (
    <div className="game">
      <video
        src={pokemonBackground}
        className="bgVideo"
        autoPlay
        muted
        loop
        type="video/mp4"
      ></video>

      <div className="overlay">
        {elements.map((el) => {
          const left = `${(el.x / REFERENCE_WIDTH) * 100}%`;
          const top = `${(el.y / REFERENCE_HEIGHT) * 100}%`;

          return (
            <img
              key={el.id}
              src={el.content}
              className="pokemon"
              style={{ left, top }}
              alt={`pokemon-${el.id}`}
            />
          );
        })}
      </div>
    </div>
  );
}

async function fetchPokemons(n) {
  const pokemons = [];

  for (let i = 0; i < n; i++) {
    // considering only pokemons up to the third generation
    const randomId = Math.floor(Math.random() * 386 + 1);

    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${randomId}/`
    );
    const pokemon = await response.json();

    pokemons.push(
      pokemon.sprites.versions["generation-v"]["black-white"].animated
        .front_default
    );
  }

  return pokemons;
}
