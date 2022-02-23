import React from "react";
function FormSubheader(props) {
  return (
    <div className="mt-4 self-center text-xl sm:text-sm text-gray-800 mx-auto">     
      {props.text}
    </div>
  );
}

export default FormSubheader;