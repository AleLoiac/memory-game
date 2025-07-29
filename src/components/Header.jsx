import "../styles/header.css";

export default function Header() {
  return (
    <div className="header">
      <h1>Pokemon Memory Game</h1>
      <p>
        Try to find all the pokemons, but don't click on the same one more than
        once or your score will reset!
      </p>
    </div>
  );
}
