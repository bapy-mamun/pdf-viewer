import React, { useState } from "react";

interface EditableEdgeProps {
  value: string;
  onSave: (newValue: string) => void;
}

const EditableEdge: React.FC<EditableEdgeProps> = ({ value, onSave }) => {
  const [inputValue, setInputValue] = useState(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSave = () => {
    onSave(inputValue);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default EditableEdge;
