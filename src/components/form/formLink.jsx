import React from "react";
import { Link } from "react-router-dom";
function FormLink({ linkSignUp }) {
  return (
    <div className="flex justify-center items-center mt-6">
      <span className="ml-2">
        You {linkSignUp.status} have an account?
        <Link
          to="/signup"
          className="text-lg ml-2 text-blue-500 font-bold"
        >
          {linkSignUp.register} now!
        </Link>
      </span>
    </div>
  );
}

export default FormLink;