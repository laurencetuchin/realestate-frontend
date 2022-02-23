
import React from "react";
function Form(props) {
  return (
    <div
      className="
    flex 
    flex-col
    bg-white
    shadow-md
    px-4
    sm:px-6
    md:px-8
    lg:px-10
    py-8
    rounded-3xl
    w-50
    max-w-md 
    mx-auto"
    >
      {props.children}
    </div>
  );
}

export default Form;