import "../styles/winDialog.css";

export default function WinDialog({ openWinDialog, playAgain }) {
  return openWinDialog ? (
    <>
      <div className="backdrop"></div>
      <dialog className="winDialog">
        <p>You caught 'em all!</p>
        <button onClick={playAgain}>Play again</button>
      </dialog>
    </>
  ) : null;
}
