import React from "react";
function FormContainer(props) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 mx-auto">
      {props.children}
    </div>
  );
}

export default FormContainer;