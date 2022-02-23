import React from "react";
// static asset
import img from "../assets/img1.jpg";

// styled component
import { Card, Button, Form, FormControl } from "react-bootstrap";
import { useContext, useEffect } from "react";

// Context
import { userContext } from "../utils/userContext";

// Redirect method
import { useNavigate } from "react-router-dom";
const Home = () => {
  const { state: currentUserState } = useContext(userContext);
  const navigate = useNavigate();
  const is_loggedIn =
    !!localStorage.getItem("token") && !!currentUserState.token;
  console.log(is_loggedIn);
  useEffect(() => {
    if (is_loggedIn) {
      navigate("/home");
    } else {
      navigate("/");
    }
  }, [currentUserState]);
  return (
    <div>
      <Card className="p-10 h-full w-full flex justify-center text-white">
        <Card.Img src={img} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Text className="h-32"></Card.Text>
          <Card.Text className="h-32"></Card.Text>
          <Card.Text className="relative -left-10 decoration-8 font-black top-90 flex justify-center text-white break-words">
            We help you find your dream home.
          </Card.Text>
          <Button className="relative -right-28 top-60 flex justify-center text-white">
            Broswer listings
          </Button>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search Suburb"
              className="me-2 w-60 relative -right-80 -top-90"
              aria-label="Search"
            />
            <Button
              variant="outline-success"
              className="relative -right-80 -top-90"
            >
              Search
            </Button>
          </Form>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
};

export default Home;