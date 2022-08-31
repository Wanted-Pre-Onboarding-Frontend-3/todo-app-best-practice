import React from 'react';

export interface SvgIconProps {
  size?: number | string;
  fillColor?: string;
}

export const CheckIcon = React.memo<SvgIconProps>(({ size = 24, fillColor = '#4A4A4A' }) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={size} height={size} fill={fillColor}>
    <path
      d='M10 19c-.3 0-.5-.1-.7-.3l-6-6c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l5.2 5.2 9.3-11.2c.4-.4 1-.5 1.4-.1.4.4.5 1 .1 1.4l-10 12c-.1.3-.4.4-.7.4z'
      fill={fillColor}
    />
  </svg>
));
