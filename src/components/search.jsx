import axios from "axios";
import { useContext, useEffect, useState } from "react";
import API from "../utils/api";

// Create a search form function that allows users to search for properties suburb
function Search() {
  const [search, setSearch] = useState("");
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchSuburb, setSearchSuburb] = useState("");


  useEffect(() => {
    const filterData = async () => {
      const result = await fetch(
        `${API}/properties/search/${searchSuburb}`
      );
      const data = await result.json();
      setFilteredProperties(data);
    };
    filterData();
  }, [searchSuburb]);


  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchResults(filteredProperties);
    setSearchSuburb("");
  };

//   Search form function that allows users to search for properties suburb
    const handleSearchSuburb = (e) => {
        e.preventDefault();
        setSearchSuburb(search);
        setSearch("");
        };

  const eachProperty = searchResults.map((property) => {
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
    <div className="pt-2 relative mx-auto text-gray-600">
      <h1 className="text-2xl h-10 text-center">Search</h1>
      <form onSubmit={handleSubmit} className="text-center mx-auto relative pt-2">
        <label>
          
          <input
            type="text"
            name="q"
            value={searchSuburb}
            onChange={handleChange}
            className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
            placeholder="Search suburb"
            />
        </label>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">Search</button>
      </form>
      <br></br>
      <form onSubmit={handleSearchSuburb}>
        <label>
          Search by suburb:
          <input
            type="text"
            name="q"
            value={search}
            onChange={handleChange}
            className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
            placeholder="Search suburb"
          />
        </label>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">Search</button>
      </form>
      <div>{eachProperty}</div>
    </div>
  );
  }

  useEffect(() => {
      axios('https://jsonplaceholder.typicode.com/albums/1/photos')
        .then(res => {
            console.log(res.data);
            setProperties(res.data);
            setFilteredProperties(res.data);
        })
        .catch(err => console.log(err));
    }, []);



  export default Search;