import React, { useState } from "react";
import CheckboxBody from "./CheckboxBody";

const SingularCheckbox = () => {
  const [selectedCheckbox, setSelectedCheckbox] = useState("");
  const handleCheckbox = (value) => {
    setSelectedCheckbox((prevValue) => (value === prevValue ? null : value));
  };

  return (
    <>
      <h1 className="text-center">Solo Selector Checkbox App</h1>
      <hr />

      <CheckboxBody {...{ handleCheckbox, selectedCheckbox }} />
      <hr />
      {selectedCheckbox === "first checked" && <h6>first checked</h6>}
      {selectedCheckbox === "second checked" && <h6>second checked</h6>}
      {selectedCheckbox === "third checked" && <h6>third checked</h6>}
      {selectedCheckbox === "fourth checked" && <h6>fourth checked</h6>}
      {selectedCheckbox === "fifth checked" && <h6>fifth checked</h6>}
    </>
  );
};

export default SingularCheckbox;
