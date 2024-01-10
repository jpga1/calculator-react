export default function Display({ upperDisplayValue, bottomDisplayValue }) {
  return (
    <div className="output">
      <div className="upper-display">{upperDisplayValue}</div>
      <div className="bottom-display">{bottomDisplayValue}</div>
    </div>
  );
}
