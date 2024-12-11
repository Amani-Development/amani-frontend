import React, { useState } from "react";
import style from "./MultiInput.module.css";

interface MultiInputTextBoxProps {
  value: string[]; // Current list of items
  onChange: (items: string[]) => void; // Callback to update the parent
  placeholder?: string; // Placeholder text
}

const MultiInputTextBox: React.FC<MultiInputTextBoxProps> = ({
  value,
  onChange,
  placeholder = "Enter items",
}) => {
  const [currentInput, setCurrentInput] = useState("");

  // Add the current input to the list
  const handleAddItem = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && currentInput.trim()) {
      onChange([...value, currentInput.trim()]);
      setCurrentInput("");
      e.preventDefault();
    }
  };

  // Remove an item from the list
  const handleRemoveItem = (index: number) => {
    const updatedValue = value.filter((_, i) => i !== index);
    onChange(updatedValue);
  };

  return (
    <div className={style.multiInputContainer}>
      <div className={style.chips}>
        {value.map((item, index) => (
          <div key={index} className={style.chip}>
            {item}
            <button
              type="button"
              className={style.removeButton}
              onClick={() => handleRemoveItem(index)}
            >
              &times;
            </button>
          </div>
        ))}
      </div>
      <div className="relative"></div>
      <input
        type="text"
        placeholder={placeholder}
        value={currentInput}
        onChange={(e) => setCurrentInput(e.target.value)}
        onKeyDown={handleAddItem}
        className={style.input}
      />
    </div>
  );
};

export default MultiInputTextBox;
