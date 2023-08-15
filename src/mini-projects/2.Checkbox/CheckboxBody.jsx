import React from "react";
import "./CheckboxBody.css";

const CheckboxBody = ({ handleCheckbox, selectedCheckbox }) => {
  return (
    <div className="checkbox-container">
      <label className="checkbox-label">
        <input
          type="checkbox"
          onChange={() => handleCheckbox("first checked")}
          checked={selectedCheckbox === "first checked"}
        />
        First Checkbox
      </label>
      <label className="checkbox-label">
        <input
          type="checkbox"
          onChange={() => handleCheckbox("second checked")}
          checked={selectedCheckbox === "second checked"}
        />
        Second Checkbox
      </label>
      <label className="checkbox-label">
        <input
          type="checkbox"
          onChange={() => handleCheckbox("third checked")}
          checked={selectedCheckbox === "third checked"}
        />
        Third Checkbox
      </label>
      <label className="checkbox-label">
        <input
          type="checkbox"
          onChange={() => handleCheckbox("fourth checked")}
          checked={selectedCheckbox === "fourth checked"}
        />
        Fourth Checkbox
      </label>
      <label className="checkbox-label">
        <input
          type="checkbox"
          onChange={() => handleCheckbox("fifth checked")}
          checked={selectedCheckbox === "fifth checked"}
        />
        Fifth Checkbox
      </label>
    </div>
  );
};

export default CheckboxBody;
