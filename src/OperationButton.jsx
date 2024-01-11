export default function OperationButton({
  operation,
  handleOperationButtonClick,
}) {
  // An operation button component to specify arithmetic operator and click event handler
  return (
    <button
      className="operation-button"
      onClick={() => handleOperationButtonClick(operation)}
    >
      {operation}
    </button>
  );
}
