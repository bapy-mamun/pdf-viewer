import React, { useState } from "react";

interface EdgeProps {
  value: string;
  onSave: (newValue: string) => void;
}

const Edge: React.FC<EdgeProps> = ({ value, onSave }) => {
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

export default Edge;
