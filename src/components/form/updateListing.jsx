import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../utils/userContext';

// Create a form that allows admins to update properties
export default function UpdateListing() {
    // Create a form that allows admins to update properties
    const [properties, setProperties] = useState([]);
    const [property, setProperty] = useState({
        title: '',
        price: '',
        image: '',
        city: '',
        address: '',
        status: '',
        bedroom: '',
        bathroom: '',
        description: '',
    });
    const { state: currentUserState } = useContext(userContext);
    const navigate = useNavigate();
    const is_loggedIn =
        !!localStorage.getItem('token') && !!currentUserState.token;
    console.log(is_loggedIn);
    useEffect(() => {
        if (is_loggedIn) {
            navigate('/home');
        }
    }, [currentUserState]);
    const handleChange = (e) => {
        setProperty({
            ...property,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(property);
        setProperties([...properties, property]);
    };
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
    });
    return (
        <div>
            <h1>Update Listing</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input
                        type="text"
                        name="title"
                        value={property.title}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Price: $ 
                    <input
                        type="text"
                        name="price"
                        value={property.price}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Image:
                    <input

                        type="text" 
                        name="image"
                        value={property.image}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    City:
                    <input

                        type="text"
                        name="city"
                        value={property.city}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Address:
                    <input

                        type="text"
                        name="address"
                        value={property.address}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Type:
                    <input

                        type="text"
                        name="status"
                        value={property.status}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Bedroom:
                    <input
                        type="text"
                        name="bedroom"
                        value={property.bedroom}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Bathroom:
                    <input
                        type="text"
                        name="bathroom"
                        value={property.bathroom}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Description:
                    <input
                        type="text"
                        name="description"
                        value={property.description}
                        onChange={handleChange}
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
            {eachProperty}
        </div>
    );
}