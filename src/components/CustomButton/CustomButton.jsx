import React from "react";

function CustomButton({ type, buttonText, icon, btnNext, customCss, pitcher }) {
  return (
    <button type={type} className={customCss} onClick={btnNext} style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
      {icon}
      {buttonText}
      {pitcher}
    </button>
  );
}

export default CustomButton;
