import { useState } from "react";
import Display from "./Display.jsx";
import Keypad from "./Keypad.jsx";

/*TODO: Implement handleOperationButtonClick and handleEqualsButtonClick functions */

export default function App() {
  const [upperDisplay, setUpperDisplay] = useState("");
  const [bottomDisplay, setBottomDisplay] = useState("");

  function handleNumberButtonClick(number) {
    setBottomDisplay((currentInput) => currentInput + number);
  }

  function handleOperationButtonClick() {}

  function handleClearButtonClick() {
    setUpperDisplay("");
    setBottomDisplay("");
  }

  function handleDecimalButtonClick(decimal) {
    setBottomDisplay((currentInput) =>
      currentInput.includes(".") ? currentInput : currentInput + decimal
    );
  }

  function handleEqualsButtonClick() {}

  return (
    <div className="calculator-body">
      <Display
        bottomDisplayValue={bottomDisplay}
        upperDisplayValue={upperDisplay}
      />
      <Keypad
        handleNumberButtonClick={handleNumberButtonClick}
        handleOperationButtonClick={handleOperationButtonClick}
        handleClearButtonClick={handleClearButtonClick}
        handleDecimalButtonClick={handleDecimalButtonClick}
        handleEqualsButtonClick={handleEqualsButtonClick}
      />
    </div>
  );
}
