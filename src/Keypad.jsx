import NumberButton from "./NumberButton.jsx";
import OperationButton from "./OperationButton.jsx";

export default function Keypad({
  handleNumberButtonClick,
  handleOperationButtonClick,
  handleClearButtonClick,
  handleDecimalButtonClick,
  handleEqualsButtonClick,
}) {
  // A keypad component to contain all calculator buttons
  return (
    <div className="keypad">
      <button className="clear-button" onClick={handleClearButtonClick}>
        AC
      </button>

      <NumberButton
        number={7}
        handleNumberButtonClick={handleNumberButtonClick}
      />
      <NumberButton
        number={8}
        handleNumberButtonClick={handleNumberButtonClick}
      />
      <NumberButton
        number={9}
        handleNumberButtonClick={handleNumberButtonClick}
      />

      <OperationButton
        operation="/"
        handleOperationButtonClick={handleOperationButtonClick}
      />

      <NumberButton
        number={4}
        handleNumberButtonClick={handleNumberButtonClick}
      />
      <NumberButton
        number={5}
        handleNumberButtonClick={handleNumberButtonClick}
      />
      <NumberButton
        number={6}
        handleNumberButtonClick={handleNumberButtonClick}
      />

      <OperationButton
        operation="*"
        handleOperationButtonClick={handleOperationButtonClick}
      />

      <NumberButton
        number={1}
        handleNumberButtonClick={handleNumberButtonClick}
      />
      <NumberButton
        number={2}
        handleNumberButtonClick={handleNumberButtonClick}
      />
      <NumberButton
        number={3}
        handleNumberButtonClick={handleNumberButtonClick}
      />

      <OperationButton
        operation="-"
        handleOperationButtonClick={handleOperationButtonClick}
      />

      <NumberButton
        number={0}
        handleNumberButtonClick={handleNumberButtonClick}
      />

      <button
        className="decimal-button"
        onClick={() => handleDecimalButtonClick(".")}
      >
        .
      </button>

      <button className="equals-button" onClick={handleEqualsButtonClick}>
        =
      </button>

      <OperationButton
        operation="+"
        handleOperationButtonClick={handleOperationButtonClick}
      />
    </div>
  );
}
