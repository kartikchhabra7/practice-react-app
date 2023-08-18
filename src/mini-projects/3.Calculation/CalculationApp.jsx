import React, { useRef, useState } from "react";
import "./CalculateContainer.css";

const InputField = ({
  inputValueFirst,
  inputValueSecond,
  handleFirstInput,
  handleSecondInput,
  selectedOperation,
}) => {
  return (
    <>
      <input
        type="number"
        className="input-field"
        value={inputValueFirst}
        onChange={handleFirstInput}
      />
      <OperationSymbol selectedOperation={selectedOperation} />
      <input
        type="number"
        className="input-field"
        value={inputValueSecond}
        onChange={handleSecondInput}
      />
    </>
  );
};

const OperationSymbol = ({ selectedOperation }) => {
  return (
    <div className="operation-icon">
      {selectedOperation === "+" && <span>➕</span>}
      {selectedOperation === "-" && <span>➖</span>}
      {selectedOperation === "/" && <span>➗</span>}
      {selectedOperation === "*" && <span>✖️</span>}
    </div>
  );
};
const OperationButton = ({ handleOperationClick, selectedOperation }) => {
  return (
    <>
      <div className="operation-buttons">
        <button
          type="button"
          onClick={() => handleOperationClick("+")}
          className={selectedOperation === "+" ? "btn active" : "btn"}
        >
          +
        </button>
        <button
          type="button"
          onClick={() => handleOperationClick("-")}
          className={selectedOperation === "-" ? "btn active" : "btn"}
        >
          -
        </button>
        <button
          type="button"
          onClick={() => handleOperationClick("/")}
          className={selectedOperation === "/" ? "btn active" : "btn"}
        >
          /
        </button>
        <button
          type="button"
          onClick={() => handleOperationClick("*")}
          className={selectedOperation === "*" ? "btn active" : "btn"}
        >
          *
        </button>
      </div>
    </>
  );
};

const FormControls = ({
  handleOperationReset,
  calculatedTotal,
  countOperation,
}) => {
  return (
    <>
      {" "}
      <button type="submit" className="submit-btn">
        Calculate
      </button>
      <button
        type="button"
        className="reset-btn"
        onClick={handleOperationReset}
      >
        Reset
      </button>
      <h3 className="result">Total: {calculatedTotal.toFixed(0)}</h3>
      <h3 className="result">Count Operations: {countOperation}</h3>
    </>
  );
};

const CalculateContainer = () => {
  const ref = useRef(0);
  const [countOperation, setCountOperation] = useState(0);
  const [inputValueFirst, setInputValueFirst] = useState("");
  const [inputValueSecond, setInputValueSecond] = useState("");
  const [calculatedTotal, setCalculatedTotal] = useState(0);
  const [selectedOperation, setSelectedOperation] = useState("+");

  const handleFirstInput = (event) => setInputValueFirst(event.target.value);
  const handleSecondInput = (event) => setInputValueSecond(event.target.value);

  const handleSubmit = (reload) => {
    reload.preventDefault();

    const valueFirst = parseInt(inputValueFirst);
    const valueSecond = parseInt(inputValueSecond);

    if (!valueFirst || !valueSecond) {
      alert("Please enter values.");
    } else {
      switch (selectedOperation) {
        case "+":
          setCalculatedTotal(valueFirst + valueSecond);
          break;
        case "-":
          setCalculatedTotal(valueFirst - valueSecond);
          break;
        case "/":
          setCalculatedTotal(valueFirst / valueSecond);
          break;
        case "*":
          setCalculatedTotal(valueFirst * valueSecond);
          break;
        default:
          return selectedOperation;
      }
    }
  };

  const handleOperationClick = (operation) => {
    setSelectedOperation(operation);
    handleOperationCount(); // called the operation function of count. The number of operations will rise if I press the button.
  };

  const handleOperationReset = () => {
    setSelectedOperation("+");
    setCountOperation((ref.current = 0));
  };

  const handleOperationCount = () => {
    ref.current = ref.current + 1;
    setCountOperation(ref.current);
  };

  return (
    <div className="custom-height">
      <h1 className="text-center text-light">Calculation App</h1>
      <hr style={{ border: "5px solid #007bff" }} />
      <div className="calculation-container">
        <form className="calculation-form" onSubmit={handleSubmit}>
          <InputField
            {...{
              inputValueFirst,
              inputValueSecond,
              handleFirstInput,
              handleSecondInput,
              selectedOperation,
            }}
          />
          <OperationButton {...{ selectedOperation, handleOperationClick }} />
          <FormControls
            {...{ calculatedTotal, handleOperationReset, countOperation }}
          />
        </form>
      </div>
    </div>
  );
};

export default CalculateContainer;
