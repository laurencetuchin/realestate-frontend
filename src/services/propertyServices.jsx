import axios from "axios";


// making a post request to create a property
export const createProperty = async (property, dispatch) => {
  await axios({
    method: "post",
    url: `${import.meta.env.VITE_APP_API_ENDPOINT}/api/properties`,
    headers: { "Content-Type": "application/json" },
    data:{
      ...property,
      'status' : parseInt(property.status),
      'category' : parseInt(property.category),
      'phone' : parseInt(property.phone)
    }
  })
    .then((res) => {
      console.log(res)
      return res.data
    })
    .catch((error) => {
      return error.response;
    });
};

// Get all properties
export const getAllProperties = async () => {
  await axios({
    method: "get",
    url: `${import.meta.env.VITE_APP_API_ENDPOINT}/api/properties`,
    headers: { "Content-Type": "application/json" }
  })
    .then((res) => {
      return res.data
    })
    .catch((error) => {
      return error.response;
    });
};
// Get one properties
export const getOneProperty = async (id) => {
  await axios({
    method: "get",
    url: `${import.meta.env.VITE_APP_API_ENDPOINT}/api/properties/${id}`,
    headers: { "Content-Type": "application/json" }
  })
    .then((res) => {
      return res.data
    })
    .catch((error) => {
      return error.response;
    });
};
// search suburb
export const search = async (term) => {
  await axios({
    method: "get",
    url: `${import.meta.env.VITE_APP_API_ENDPOINT}/api/property/search`,
    headers: { "Content-Type": "application/json" }
  })
    .then((res) => {
      return res.data
    })
    .catch((error) => {
      return error.response;
    });
};