export default function NumberButton({ number, handleNumberButtonClick }) {
  // A numbers button component to specify number value and click event handler
  return (
    <button
      className="number-button"
      onClick={() => handleNumberButtonClick(number)}
    >
      {number}
    </button>
  );
}
