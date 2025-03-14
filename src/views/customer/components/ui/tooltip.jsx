import React from 'react';
import '../../styles/tooltip.css';

export function TooltipProvider({ children, text }) {
  return (
    <div className="tooltip-wrapper">
      {children}
      <div className="tooltip">{text}</div>
    </div>
  );
}
