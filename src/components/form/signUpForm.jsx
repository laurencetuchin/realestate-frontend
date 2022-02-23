import React, { useEffect, useContext } from "react";
// Context
import { userContext } from "../../utils/userContext";

// Redirect method
import { useNavigate } from "react-router-dom";

// sub-component
import SignUpFormLink from "./signUpFormLink";

// Form validation
import { ErrorMessage, Formik } from "formik";
import * as Yup from "yup";
// toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignUpForm({ linkSignIn }) {
  const { state: currentUserState, signUp } = useContext(userContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUserState.token != null) {
      navigate("/home");
    }
  }, [currentUserState]);

  const Schema = Yup.object().shape({
    password: Yup.string().required("This field is required"),
    password_comfirmation: Yup.string().when("password", {
      is: (val) => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf(
        [Yup.ref("password")],
        "Both password need to be the same"
      ),
    }),
    name: Yup.string().max(255).required("Name is required"),
    email: Yup.string()
      .email("Must be a valid email")
      .max(255)
      .required("Email is required"),
  });
  return (
    <div className="mt-10">
      <ToastContainer
        position="top-left"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          password_comfirmation: "",
        }}
        validationSchema={Schema}
        onSubmit={(values) => {
          signUp(values);
          if (!currentUserState.token) {
            toast("The user is already exist!");
          }
        }}
      >
        {({ values, errors, handleSubmit, handleChange, handleBlur }) => {
          return (
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col mb-5">
                <label
                  htmlFor="phone"
                  className="mb-1 text-xs tracking-wide text-gray-600"
                >
                  Name:
                </label>
                <div className="relative">
                  <div
                    className="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
                  >
                    <i className="fas fa-at text-blue-500"></i>
                  </div>

                  <input
                    type="name"
                    name="name"
                    id="name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.name}
                    className="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400
                  "
                    placeholder="Enter your phone number"
                  />
                  {errors.name ? <div>{errors.name}</div> : null}
                </div>
              </div>
              <div className="flex flex-col mb-6">
                <label
                  htmlFor="email"
                  className="mb-1 text-xs tracking-wide text-gray-600"
                >
                  E-Mail Address:
                </label>
                <div className="relative">
                  <div
                    className="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
                  >
                    <i className="fas fa-at text-blue-500"></i>
                  </div>

                  <input
                    type="email"
                    name="email"
                    id="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                    className="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400
                  "
                    placeholder="Enter your email"
                  />
                  {errors.email ? <div>{errors.email}</div> : null}
                </div>
              </div>
              <div className="flex flex-col mb-6">
                <label
                  htmlFor="password"
                  className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                >
                  Password:
                </label>
                <div className="relative">
                  <div
                    className="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
                  >
                    <span>
                      <i className="fas fa-lock text-blue-500"></i>
                    </span>
                  </div>

                  <input
                    type="password"
                    name="password"
                    id="password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.password}
                    className="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400
                  "
                    placeholder="Enter your password"
                  />
                  {errors.password ? <div>{errors.password}</div> : null}
                </div>
              </div>
              <div className="flex flex-col mb-6">
                <label
                  htmlFor="password_comfirmation"
                  className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                >
                  Password comfirmation:
                </label>
                <div className="relative">
                  <div
                    className="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
                  >
                    <span>
                      <i className="fas fa-lock text-blue-500"></i>
                    </span>
                  </div>

                  <input
                    type="Password"
                    name="password_comfirmation"
                    id="password_comfirmation"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.password_comfirmation}
                    className="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400
                  "
                    placeholder="Enter your password_comfirmation"
                  />
                  {errors.password_comfirmation ? (
                    <div>{errors.password_comfirmation}</div>
                  ) : null}
                </div>
              </div>
              <div className="flex w-full">
                <button
                  type="submit"
                  className="
                  flex
                  mt-2
                  items-center
                  justify-center
                  focus:outline-none
                  text-white text-sm
                  sm:text-base
                  bg-blue-500
                  hover:bg-blue-600
                  rounded-2xl
                  py-2
                  w-full
                  transition
                  duration-150
                  ease-in
                "
                >
                  <span className="mr-2 uppercase">Sign Up</span>
                  <span>
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                </button>
              </div>
            </form>
          );
        }}
      </Formik>
      <SignUpFormLink linkSignIn={linkSignIn} />
    </div>
  );
}

export default SignUpForm;