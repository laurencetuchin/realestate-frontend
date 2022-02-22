import React, { useReducer, createContext } from "react";
import reducer from "./reducer";
import { search, getOneProperty,getAllProperties,createProperty} from "../services/propertyServices";

const propertyState = {
  group: null,
  selected:null
};

export const propertyContext= createContext({
  state: propertyState,
  dispatch: () => {},
  searchProperty: () => {},
  getOne: () => {},
  getAll: () => {},
  sellProperty: () => {},
});

const PropertyProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, propertyState);
  const searchProperty = (data) => search(data, dispatch);
  const getOne = (data) => getOneProperty(data, dispatch);
  const getAll = (data) => getAllProperties(data, dispatch);
  const sellProperty = (data) => createProperty(data, dispatch);
  
  return (
    <propertyContext.Provider value={{ state, dispatch,searchProperty,getOne,getAll,sellProperty}}>
      {children}
    </propertyContext.Provider>
  );
};

export default PropertyProvider;