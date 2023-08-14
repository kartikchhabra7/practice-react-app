import React, { useState } from "react";
import "./Accordion.css";

const AccordionSection = ({ activeButtons, handleChange, data }) => {
  return (
    <>
      <div className="accordion">
        <button
          className="accordion-button"
          onClick={() => handleChange(data.content)}
        >
          {activeButtons.includes(data.content) ? "➖" : "➕"}
        </button>
        {activeButtons.includes(data.content) && (
          <div className="accordion-content">{data.content}</div>
        )}
      </div>
    </>
  );
};

const AccordionBody = () => {
  const item = [
    {
      content: "active first",
    },
    {
      content: "active second",
    },
    {
      content: "active third",
    },
    {
      content: "active fourth",
    },
    {
      content: "active fifth",
    },
  ];

  const [activeButtons, setActiveButtons] = useState(["active first"]);

  function handleChange(changeValue) {
    if (activeButtons.includes(changeValue)) {
      setActiveButtons(activeButtons.filter((value) => value !== changeValue)); //for unchecked the condition its optional
    } else {
      setActiveButtons([...activeButtons, changeValue]);
    }
  }

  return (
    <div className="accordion-container">
      <h1 className="text-center">ACCORDION APP</h1>
      <hr />
      {item.map((data, index) => {
        return (
          <AccordionSection
            {...{ activeButtons, handleChange, data }}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default AccordionBody;
