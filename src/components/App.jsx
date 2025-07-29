import "../styles/App.css";
import Header from "./Header";

export default function App() {
  const pokemonBackground = "../src/assets/video/pokemon-emerald-waterfall.mp4";

  return (
    <>
      <Header />
      <video
        src={pokemonBackground}
        className="bgVideo"
        autoPlay
        muted
        loop
        type="video/mp4"
      ></video>
    </>
  );
}
