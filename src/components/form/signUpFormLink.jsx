import React from "react";
import { Link } from "react-router-dom";
function SignUpFormLink({ linkSignIn }) {
  return (
    <div className="flex justify-center items-center mt-6">
      <span className="ml-2">
        You {linkSignIn.status} have an account?
        <Link
          to="/register"
          className="text-lg ml-2 text-blue-500 font-bold"
        >
          {linkSignIn.LogIn} now!
        </Link>
      </span>
    </div>
  );
}

export default SignUpFormLink;