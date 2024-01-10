export default function NumberButton({ number, handleNumberButtonClick }) {
  return (
    <button
      className="number-button"
      onClick={() => handleNumberButtonClick(number)}
    >
      {number}
    </button>
  );
}
