import "../styles/game.css";

export default function Game() {
  const pokemonBackground = "../src/assets/video/pokemon-emerald-waterfall.mp4";

  const REFERENCE_WIDTH = 1920;
  const REFERENCE_HEIGHT = 1080;

  const elements = [
    { id: 1, x: 510, y: 420 },
    { id: 2, x: 1305, y: 620 },
    { id: 3, x: 760, y: 975 },
    { id: 4, x: 1530, y: 830 },
  ];

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
            <div key={el.id} className="pokemon" style={{ left, top }}></div>
          );
        })}
      </div>
    </div>
  );
}
