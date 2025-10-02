import React, { useState } from 'react';
import './CheckboxList.css';
import { setlist } from '../data/setlist';

const CheckboxList = () => {
  const initialItems = setlist.map((song, index) => ({
    id: `song-${index + 1}`,
    label: song,
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
        <svg viewBox="0 0 14 10" fill="none" aria-hidden="true" focusable="false" class="icon icon-arrow" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.537.808a.5.5 0 01.817-.162l4 4a.5.5 0 010 .708l-4 4a.5.5 0 11-.708-.708L11.793 5.5H1a.5.5 0 010-1h10.793L8.646 1.354a.5.5 0 01-.109-.546z" fill="currentColor">
        </path></svg>
      </button>
    </form>
  );
};

export default CheckboxList;
