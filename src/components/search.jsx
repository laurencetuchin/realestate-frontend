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
    <div className="pt-2 relative mx-auto text-gray-600">
      <h1>Search</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Search by suburb:
          <input
            type="text"
            name="searchSuburb"
            value={searchSuburb}
            onChange={handleChange}
            className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          />
        </label>
        <button type="submit"><svg class="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px"
            viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve"
            width="512px" height="512px"><path
            d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
        </svg></button>
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



