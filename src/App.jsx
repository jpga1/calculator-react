import { useState } from "react";
import Display from "./Display.jsx";
import Keypad from "./Keypad.jsx";

export default function App() {
  const [upperDisplay, setUpperDisplay] = useState("");
  const [bottomDisplay, setBottomDisplay] = useState("");
  const [operand1, setOperand1] = useState(0);
  const [operand2, setOperand2] = useState(0);
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState(0);

  function handleNumberButtonClick(number) {
    setBottomDisplay((currentInput) => currentInput + number);
  }

  function handleOperationButtonClick(operationInput) {
    setOperation(operationInput);
    setOperand1(Number(bottomDisplay));

    let operand1temp = bottomDisplay;

    setBottomDisplay("");

    setUpperDisplay(() => operand1temp + operationInput);
  }

  function handleClearButtonClick() {
    setUpperDisplay("");
    setBottomDisplay("");
    setOperand1(0);
    setOperand2(0);
    setOperation("");
    setResult(0);
  }

  function handleDecimalButtonClick(decimal) {
    setBottomDisplay((currentInput) =>
      currentInput.includes(".") ? currentInput : currentInput + decimal
    );
  }

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
