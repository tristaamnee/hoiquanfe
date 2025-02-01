import React from "react";

interface TextBoxProps {
  text: string;
  className?: string;
}

const TextBox: React.FC<TextBoxProps> = ({
  text,
  className = "py-4 flex justify-center text-white",
}) => {
  return <div className={className}>{text}</div>;
};

export default TextBox;
