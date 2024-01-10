export default function OperationButton({
  operation,
  handleOperationButtonClick,
}) {
  return (
    <button
      className="operation-button"
      onClick={() => handleOperationButtonClick(operation)}
    >
      {operation}
    </button>
  );
}
