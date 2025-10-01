import React, { useState } from 'react';
import './Rainbow.css';

export const HighlightRainbow = () => {
  const [highlightedIndex, setHighlightedIndex] = useState(null);
  const colors = ['#ff0000', '#ffff00', '#00ff00', '#00ffff', '#0000ff'];
  const colorNames = ['Red', 'Yellow', 'Green', 'Cyan', 'Blue'];

  return (
    <div className="rainbow-container">
      <div className="rainbow highlight-rainbow">
        {colors.map((color, index) => (
          <div
            key={color}
            className={`rainbow-stripe ${highlightedIndex === index ? 'highlighted' : ''}`}
            onMouseEnter={() => setHighlightedIndex(index)}
            onMouseLeave={() => setHighlightedIndex(null)}
            role="button"
            tabIndex={0}
            aria-label={`${colorNames[index]} stripe`}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                setHighlightedIndex(index);
              }
            }}
            onKeyUp={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                setHighlightedIndex(null);
              }
            }}
          />
        ))}
      </div>
      {highlightedIndex !== null && (
        <div className="color-info" role="status" aria-live="polite">
          {colorNames[highlightedIndex]}
        </div>
      )}
    </div>
  );
};
