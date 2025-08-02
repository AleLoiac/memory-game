import { useEffect, useState } from "react";
import "../styles/game.css";
import Score from "./Score";

export default function Game() {
  const pokemonBackground = "../src/assets/video/pokemon-emerald-waterfall.mp4";

  const [pokemons, setPokemons] = useState([]);
  const [foundPokemons, setFoundPokemons] = useState([]);
  let [score, setScore] = useState(0);

  const REFERENCE_WIDTH = 1920;
  const REFERENCE_HEIGHT = 1080;

  const elements = [
    { id: 1, x: 500, y: 400, content: pokemons[0] },
    { id: 2, x: 1270, y: 600, content: pokemons[1] },
    { id: 3, x: 730, y: 840, content: pokemons[2] },
    { id: 4, x: 1570, y: 800, content: pokemons[3] },
    { id: 5, x: 320, y: 900, content: pokemons[4] },
    { id: 6, x: 790, y: 580, content: pokemons[5] },
  ];

  useEffect(() => {
    async function loadPokemons() {
      const result = await fetchPokemons(6);
      setPokemons(result);
    }

    loadPokemons();
  }, []);

  const shufflePokemon = () => {
    setPokemons((prev) => shuffleArray(prev));
  };

  const clickPokemon = (content) => {
    if (!foundPokemons.includes(content)) {
      shufflePokemon();
      setScore((prev) => prev + 1);
      setFoundPokemons((prev) => [...prev, content]);
      console.log("Score:", score + 1);
    } else {
      console.log("You lost");
      setScore(0);
      setFoundPokemons([]);
    }
  };

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
              onClick={() => clickPokemon(el.content)}
            />
          );
        })}
      </div>
      <Score score={score} />
    </div>
  );
}

async function fetchPokemons(n) {
  const pokemons = [];

  for (let i = 0; i < n; ) {
    // considering only pokemons up to the third generation
    const randomId = Math.floor(Math.random() * 386 + 1);

    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${randomId}/`
    );
    const pokemon = await response.json();

    const sprite =
      pokemon.sprites.versions["generation-v"]["black-white"].animated
        .front_default;

    if (!pokemons.includes(sprite)) {
      pokemons.push(sprite);
      i++;
    }
  }

  return pokemons;
}

function shuffleArray(array) {
  const copy = [...array];
  let currentIndex = copy.length;

  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [copy[currentIndex], copy[randomIndex]] = [
      copy[randomIndex],
      copy[currentIndex],
    ];
  }

  return copy;
}
