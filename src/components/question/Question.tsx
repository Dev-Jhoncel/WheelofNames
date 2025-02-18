import React, { useState } from "react";
import { EditableWrapper, EditIcon, Input } from "../../styles";

export const Question = () => {
  const [question, setQuestion] = useState("What is your question?");
  const [editable, setEditable] = useState(false);

  const handleClick = () => {
    setEditable(true);
  };

  const handleBlur = () => {
    setEditable(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" || event.key === "Escape") {
      setEditable(false);
    }
  };
  return (
    <div className="question">
      {editable ? (
        <Input
          type="text"
          value={question}
          onChange={(event) => setQuestion(event.target.value)}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
        />
      ) : (
        <EditableWrapper onClick={handleClick}>
          <h1>{question}</h1>
          <EditIcon>
            <i className="fa-solid fa-pen-to-square"></i>
          </EditIcon>
        </EditableWrapper>
      )}
    </div>
  );
};
