import { useState } from "react";
import Display from "./Display.jsx";
import Keypad from "./Keypad.jsx";

export default function App() {
  // Display and arithmetic states for output of calculations and results
  const [upperDisplay, setUpperDisplay] = useState("");
  const [bottomDisplay, setBottomDisplay] = useState("");
  const [operand1, setOperand1] = useState(0);
  const [operand2, setOperand2] = useState(0);
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState(0);

  // Number button click event handler which updates bottom display with user input
  function handleNumberButtonClick(number) {
    setBottomDisplay((currentInput) => currentInput + number);
  }

  // Operation button click event handler which sets first operand and operator
  function handleOperationButtonClick(operationInput) {
    setOperation(operationInput);
    setOperand1(Number(bottomDisplay));

    let operand1temp = bottomDisplay;

    setBottomDisplay("");

    setUpperDisplay(() => operand1temp + operationInput);
  }

  // Clear button click event handler which resets calculator states
  function handleClearButtonClick() {
    setUpperDisplay("");
    setBottomDisplay("");
    setOperand1(0);
    setOperand2(0);
    setOperation("");
    setResult(0);
  }

  // Decimal button click event handler which allows for floating point numbers in calculations
  function handleDecimalButtonClick(decimal) {
    setBottomDisplay((currentInput) =>
      currentInput.includes(".") ? currentInput : currentInput + decimal
    );
  }

  // Equals button click event handler which execute calculation
  function handleEqualsButtonClick() {
    setOperand2(Number(bottomDisplay));

    setUpperDisplay("");

    switch (operation) {
      case "*":
        setBottomDisplay(operand1 * Number(bottomDisplay));
        break;
      case "/":
        setBottomDisplay(operand1 / Number(bottomDisplay));
        break;
      case "+":
        setBottomDisplay(operand1 + Number(bottomDisplay));
        break;
      case "-":
        setBottomDisplay(operand1 - Number(bottomDisplay));
        break;
    }

    setOperand1(result);
  }

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
