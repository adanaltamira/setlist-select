import React, { useState } from 'react';
import './CheckboxList.css';

const CheckboxList = () => {
  // Generate 20 items
  const initialItems = Array.from({ length: 20 }, (_, index) => ({
    id: `item-${index + 1}`,
    label: `Item ${index + 1}`,
    isSelected: false,
  }));

  const [items, setItems] = useState(initialItems);

  const handleItemChange = (id, checked) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, isSelected: checked } : item
      )
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedItems = items.filter(item => item.isSelected);
    console.log('Selected items:', selectedItems);
  };

  return (
    <form onSubmit={handleSubmit} className="checkbox-list-form">
      <div className="checkbox-list" role="group" aria-label="Selectable items">
        {items.map(item => (
          <div key={item.id} className="list-item-container">
            <input
              type="checkbox"
              id={item.id}
              checked={item.isSelected}
              onChange={(e) => handleItemChange(item.id, e.target.checked)}
              className="list-item-checkbox"
            />
            <label htmlFor={item.id} className="list-item-label">
              {item.label}
            </label>
          </div>
        ))}
      </div>
      <button 
        type="submit" 
        className="submit-button"
        aria-label="Submit selected items"
      >
        Submit
      </button>
    </form>
  );
};

export default CheckboxList;
