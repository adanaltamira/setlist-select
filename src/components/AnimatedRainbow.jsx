import React from 'react';
import './Rainbow.css';

export const AnimatedRainbow = () => {
  return (
    <div className="rainbow animated-rainbow">
      <div className="rainbow-stripe animated-stripe"></div>
      <div className="rainbow-stripe animated-stripe"></div>
      <div className="rainbow-stripe animated-stripe"></div>
      <div className="rainbow-stripe animated-stripe"></div>
      <div className="rainbow-stripe animated-stripe"></div>
    </div>
  );
};
