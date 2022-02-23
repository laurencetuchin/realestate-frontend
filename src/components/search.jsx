import { useContext, useEffect } from "react";
import API from "../utils/api";

// Create a search form function that allows users to search for properties suburb
export default function Search() {
      // Create a search form function that allows users to search for properties suburb
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
    setSearchBy("");
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
    <div>
      <h1>Search</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Search:
          <input
            type="text"
            name="search"
            value={search}
            onChange={handleChange}
          />
        </label>
        <label>
          Search by suburb:
          <input
            type="text"
            name="searchSuburb"
            value={searchSuburb}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <form onSubmit={handleSearchSuburb}>
        <label>
          Search by suburb:
          <input
            type="text"
            name="search"
            value={search}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <div>{eachProperty}</div>
    </div>
  );
  }



