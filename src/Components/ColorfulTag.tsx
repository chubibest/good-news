import React from 'react';

interface ColorfulTagProps {
    bgColor: string;
    text: string;
    textColor?: string;
}
const ColorfulTag = ({ bgColor, text, textColor }: ColorfulTagProps) => {
  const tagClasses = `small inline-block px-3 py-1 ${textColor ? textColor : 'text-white'} font-semibold rounded shadow-md ${bgColor}`;

  return <span className={tagClasses}>{text}</span>;
};

export default ColorfulTag;