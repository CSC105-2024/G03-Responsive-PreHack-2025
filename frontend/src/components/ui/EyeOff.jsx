import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const EyeToggle = ({ inputId }) => {
  const [show, setShow] = useState(false);

  const toggleVisibility = () => {
    const input = document.getElementById(inputId);
    if (input) {
      input.type = show ? "password" : "text";
      setShow(!show);
    }
  };

  return (
    <div onClick={toggleVisibility} className="absolute right-3 top-10 cursor-pointer text-white">
      {show ? <EyeOff size={20} /> : <Eye size={20} />}
    </div>
  );
};

export default EyeToggle;
