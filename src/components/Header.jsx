import "../styles/header.css";

export default function Header() {
  return (
    <div className="header">
      <h1>Pokemon Memory Game</h1>
      <p>
        Find all the Pokémon, but if you click the same one twice, your score
        resets!
      </p>
    </div>
  );
}
