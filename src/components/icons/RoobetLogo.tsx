import React from 'react';

export const RoobetLogo = ({ size = 40, color = "#eeaf0e" }: { size?: number, color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g fill={color}>
      <path d="M19.134.203h.926c.521.019 1.041.047 1.56.096..." />
      {/* ... rest of the paths ... */}
    </g>
  </svg>
);