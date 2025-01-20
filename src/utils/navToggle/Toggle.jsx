import React from "react";
import './Toggle.css'
const Toggle = ({onClick}) => {
  return (
    <div className="flex justify-end p-5 md:px-8 z-40">
 <input type="checkbox" id="checkbox"/>
    <label htmlFor="checkbox" onClick={onClick} className="toggle z-50">
        <div className="bars" id="bar1"></div>
        <div className="bars" id="bar2"></div>
        <div className="bars" id="bar3"></div>
    </label>
    </div>
  );
};

export default Toggle;
