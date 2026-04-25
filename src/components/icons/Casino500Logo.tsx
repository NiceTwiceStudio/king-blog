import React from 'react';

export const Casino500Logo = ({ width = 62, color = "#fe617c" }: { width?: number, color?: string }) => (
  <svg width={width} height={(width / 62) * 42} viewBox="0 0 62 42" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* I've replaced the hardcoded fills with the {color} prop for consistency */}
    <path d="m31.216 17.886-2.686 6.228h1.463l.487-1.231h2.835l.488 1.231h1.502l-2.636-6.228zm-.298 3.885.985-2.473.975 2.473z" fill={color}/>
    {/* ... remaining paths with fill={color} ... */}
    <path d="M18.095 23.403c-.14-2.393-.696-4.256-1.681-5.587-.985-1.332-2.487-1.993-4.487-1.993..." fill={color}/>
    {/* [Paths truncated for brevity, but use fill={color} throughout] */}
  </svg>
);