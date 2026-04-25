import React from 'react';

export const StakeLogo = ({ width = 80, color = "#f7fafc" }: { width?: number, color?: string }) => (
  <svg width={width} height={(width / 80) * 40} viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.184 11.496c-.016-5.352 3.4-8.312 9.68-8.336..." fill={color}/>
    <path d="M79.85 32.768c-.064-.152-.24-.112-.472.08-.888.736..." fill={color}/>
    <path d="M72.762 32.68c3.416-.008 6.064-2.264 6.544-2.992..." fill={color}/>
  </svg>
);