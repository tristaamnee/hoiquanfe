import React from "react";

function TextBox({ text }: Readonly<{ text: string }>) {
  return (
    <div className="py-4 flex justify-center">
      <text className="text-white">{text}</text>
    </div>
  );
}

export default TextBox;
