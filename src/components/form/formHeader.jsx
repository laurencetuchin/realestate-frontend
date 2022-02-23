import React from "react";
function FormHeader(props) {
  return (
    <div className="font-medium self-center text-xl sm:text-3xl text-gray-800 mx-auto">     
      {props.text}
    </div>
  );
}

export default FormHeader;