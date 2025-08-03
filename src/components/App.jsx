import "../styles/App.css";
import Game from "./Game";
import Header from "./Header";
import Music from "./Music";

export default function App() {
  return (
    <div className="app">
      <Header />
      <Game />
      <Music />
    </div>
  );
}
