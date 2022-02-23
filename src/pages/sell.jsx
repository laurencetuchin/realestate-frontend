import React, { useEffect, useContext } from "react";
//Bootstrap
import { Alert, Form, Button, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// Form validation
import { Formik } from "formik";
import * as Yup from "yup";
//Css
import "./sell.css";
// Context
import { userContext } from "../utils/userContext";
import { propertyContext } from "../utils/propertyContext";

// Redirect method
import { useNavigate } from "react-router-dom";

const Sell = () => {
  // to track the userstate, if not logged in, redirect to homgpage
  const { state: currentUserState } = useContext(userContext);
  const navigate = useNavigate();
  const is_loggedIn =
      !!localStorage.getItem("token") && !!currentUserState.token;

    useEffect(() => {
      if (!is_loggedIn) {
        navigate('/')
      }
    },[currentUserState])
  

  const { sellProperty } = useContext(propertyContext);

  const Schema = Yup.object().shape({
    title: Yup.string().max(255).required("Title is required"),
    address: Yup.string().max(255).required("Address is required"),
    price: Yup.number().min(1, "Min value 1.").required("Price is required"),
    phone: Yup.number().max(199999999).min(100).required("This field is requried"),
    bedroom: Yup.number().min(0).required("Bedroom bumber is required"),
    bathroom: Yup.number().min(0).required("Bathroom bumber is required"),
    size: Yup.number().min(0).required("Size bumber is required"),
    description: Yup.string()
      .min(10)
      .max(255)
      .required("Description is required"),
    agency: Yup.string().max(255).required("Agency is required"),
    suburb: Yup.string().required("Suburb is required"),
    category: Yup.number().required("Category is required"),
    status: Yup.number().required("Status is required"),
    email: Yup.string()
      .email("Must be a valid email")
      .max(255)
      .required("Email is required"),
  });

  return (
    <div
      className="flex 
      h-fit
    flex-col
    bg-white
    shadow-md
    px-16
    sm:px-6
    md:px-8
    lg:px-10
    py-32
    rounded-3xl
    w-260
    max-w-xl 
    mx-auto"
    >
      <div className="font-medium self-center text-xl sm:text-3xl text-gray-800 mx-auto">
        Sell property
      </div>
      <Formik
        initialValues={{
          address: "",
          price: "",
          bedroom: "",
          bathroom: "",
          size: "",
          description: "",
          agency: "",
          phone: "",
          email: "",
          title: "",
          user_id: 1,
          suburb: "",
          category: "",
          status: "",
        }}
        validationSchema={Schema}
        onSubmit={(values) => {
            sellProperty(values).then((res)=>{
                    navigate('/home')
            })

        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => {
          return (
            <Form onSubmit={handleSubmit}>
              <Form.Group as={Row} className="mb-3" controlId="address">
                <Form.Label column sm={2}>
                  Address
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="address"
                    name="address"
                    placeholder="Address"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.address}
                  />
                </Col>
                <Form.Control.Feedback type="invalid">
                  {errors.address}
                </Form.Control.Feedback>
              </Form.Group>
              {touched.address && errors.address ? (
                <div className="error-message">{errors.address}</div>
              ) : null}
              <Form.Group as={Row} className="mb-3" controlId="price">
                <Form.Label column sm={2}>
                  Price
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="price"
                    name="price"
                    placeholder="price"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.price}
                  />
                </Col>
              </Form.Group>
              {touched.price && errors.price ? (
                <div className="error-message">{errors.price}</div>
              ) : null}
              <Form.Group as={Row} className="mb-3" controlId="bedroom">
                <Form.Label column sm={2}>
                  Bedroom
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="bedroom"
                    name="bedroom"
                    placeholder="bedroom"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.bedroom}
                  />
                </Col>
              </Form.Group>
              {touched.bedroom && errors.bedroom ? (
                <div className="error-message">{errors.bedroom}</div>
              ) : null}
              <Form.Group as={Row} className="mb-3" controlId="bathroom">
                <Form.Label column sm={2}>
                  Bathroom
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="bathroom"
                    name="bathroom"
                    placeholder="bathroom"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.bathroom}
                  />
                </Col>
              </Form.Group>
              {touched.bathroom && errors.bathroom ? (
                <div className="error-message">{errors.bathroom}</div>
              ) : null}
              <Form.Group as={Row} className="mb-3" controlId="size">
                <Form.Label column sm={2}>
                  Size
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="size"
                    name="size"
                    placeholder="size"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.size}
                  />
                </Col>
              </Form.Group>
              {touched.size && errors.size ? (
                <div className="error-message">{errors.size}</div>
              ) : null}
              <Form.Group as={Row} className="mb-3" controlId="agency">
                <Form.Label column sm={2}>
                  Agency
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="agency"
                    name="agency"
                    placeholder="agency"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.agency}
                  />
                </Col>
              </Form.Group>
              {touched.agency && errors.agency ? (
                <div className="error-message">{errors.agency}</div>
              ) : null}
              <Form.Group as={Row} className="mb-3" controlId="phone">
                <Form.Label column sm={2}>
                  Phone
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="phone"
                    name="phone"
                    placeholder="phone"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.phone}
                  />
                </Col>
              </Form.Group>
              {touched.phone && errors.phone ? (
                <div className="error-message">{errors.phone}</div>
              ) : null}
              <Form.Group as={Row} className="mb-3" controlId="email">
                <Form.Label column sm={2}>
                  Email
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                  />
                </Col>
              </Form.Group>
              {touched.email && errors.email ? (
                <div className="error-message">{errors.email}</div>
              ) : null}
              <Form.Group as={Row} className="mb-3" controlId="title">
                <Form.Label column sm={2}>
                  Title
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="title"
                    name="title"
                    placeholder="title"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.title}
                  />
                </Col>
              </Form.Group>
              {touched.title && errors.title ? (
                <div className="error-message">{errors.title}</div>
              ) : null}
              <Form.Group as={Row} className="mb-3" controlId="suburb">
                <Form.Label column sm={2}>
                  Suburb
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="suburb"
                    name="suburb"
                    placeholder="suburb"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.suburb}
                  />
                </Col>
              </Form.Group>
              {touched.suburb && errors.suburb ? (
                <div className="error-message">{errors.suburb}</div>
              ) : null}
              <Form.Group as={Row} className="mb-3" controlId="category">
                <Form.Label column sm={2}>
                  Category
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    as="select"
                    type="category"
                    name="category"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.category}
                  >
                    <option className="d-none" value="">
                      Select Category
                    </option>
                    {[
                      ["Sale", 0],
                      ["Rent", 1],
                    ].map((option) => (
                      <option key={option[1]} value={option[1]}>
                        {option[0]}
                      </option>
                    ))}
                  </Form.Control>
                </Col>
              </Form.Group>
              {touched.category && errors.category ? (
                <div className="error-message">{errors.category}</div>
              ) : null}
              <Form.Group as={Row} className="mb-3" controlId="status">
                <Form.Label column sm={2}>
                  Status
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    as="select"
                    type="status"
                    name="status"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.status}
                  >
                    <option className="d-none" value="">
                      Select Status
                    </option>
                    {[
                      ["Available", 0],
                      ["Sold", 1],
                      ["Rented", 2],
                    ].map((option) => (
                      <option key={option[1]} value={option[1]}>
                        {option[0]}
                      </option>
                    ))}
                  </Form.Control>
                </Col>
              </Form.Group>
              {touched.status && errors.status ? (
                <div className="error-message">{errors.status}</div>
              ) : null}
              <Form.Group as={Row} className="mb-3" controlId="description">
                <Form.Label column sm={2}>
                  Description
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="description"
                    name="description"
                    placeholder="description"
                    as="textarea"
                    rows={5}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.description}
                  />
                </Col>
              </Form.Group>
              {touched.description && errors.description ? (
                <div className="error-message">{errors.description}</div>
              ) : null}
              <Button
                variant="primary"
                type="submit"
                className="flex
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
                  ease-in"
              >
                Click here to submit form
              </Button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Sell;