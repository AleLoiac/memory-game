import "../styles/App.css";
import Game from "./Game";
import Header from "./Header";

export default function App() {
  return (
    <div className="app">
      <Header />
      <Game />
    </div>
  );
}
