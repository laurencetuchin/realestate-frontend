import React from "react";
import { useContext, useEffect } from "react";
// Context
import { userContext } from "../utils/userContext";
import axios from "axios";

// Redirect method
import { useNavigate } from "react-router-dom";

const Listing = () => {

//   const { state: currentUserState } = useContext(userContext);
//   const navigate = useNavigate();
//   const is_loggedIn =
//     !!localStorage.getItem("token") && !!currentUserState.token;
//   console.log(is_loggedIn);
//   useEffect(() => {
//     if (is_loggedIn) {
//       navigate("/home");
//     } else {
//       navigate("/");
//     }
//   }, [currentUserState]);
//   return (
//     <div>
//         This a listing page.

//     </div>
//   );

    // Get all properties from heroku api
    
    const [properties, setProperties] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const result = await axios.get(
                "https://realestate-api-backend.herokuapp.com/api/v1/properties"
            );
            setProperties(result.data.data);
        }
        fetchData();
    }, []);

        const eachProperty = properties.map((property) => {
            return (
                <div className="card" key={property.id}>
                    <div className="card-image">
                        {/* <img src={property.image} alt={property.name} /> */}
                    </div>
                    <div className="card-content">
                        <p>{property.title}</p>
                        <p>{property.price}</p>
                    </div>
                </div>
            );
        }
    );

   return (
    <div>
        <h1>Listing</h1>
        {eachProperty}
    </div>
    );



};

export default Listing;