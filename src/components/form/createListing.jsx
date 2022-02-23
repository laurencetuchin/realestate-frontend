import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../utils/userContext';

// Create a form that allows admins to create new properties
export default function CreateListing() {
    // Create a form that allows admins to create new properties
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
        <h1>Create Listing</h1>
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
            <input type="number" name="price" value={property.price} onChange={handleChange} />
            </label>
            <label>
            Image: 
            <input type="text" name="image" value={property.image} onChange={handleChange} />
            </label>
            <label>
            City:
            <input type="text" name="city" value={property.city} onChange={handleChange} />
            </label>
            <label>
            Address:
            <input type="text" name="address" value={property.address} onChange={handleChange} />
            </label>
            <label>
            Type:
            <input type="text" name="type" value={property.status} onChange={handleChange} />
            </label>
            <label>
            Bedrooms:
            <input type="number" name="bedrooms" value={property.bedroom} onChange={handleChange} />
            </label>
            <label>
            Bathrooms:
            <input type="number" name="bathrooms" value={property.bathroom} onChange={handleChange} />
            </label>
            <label>
            Description:
            <input type="text" name="description" value={property.description} onChange={handleChange} />
            </label>
            <button type="submit">Submit</button>
        </form>
        {eachProperty}
        </div>
    );
}
