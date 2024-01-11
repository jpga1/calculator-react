export default function Display({ upperDisplayValue, bottomDisplayValue }) {
  // An output component to display user input, the current calculation, and result
  return (
    <div className="output">
      <div className="upper-display">{upperDisplayValue}</div>
      <div className="bottom-display">{bottomDisplayValue}</div>
    </div>
  );
}
