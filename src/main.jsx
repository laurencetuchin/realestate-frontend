import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import $ from 'jquery';
import Popper from 'popper.js';
//UserProvider
import UserProvider from "./utils/userContext";
// PropertyProvider
import PropertyProvider from "./utils/propertyContext";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
        <UserProvider>
          <PropertyProvider>
            <App />
          </PropertyProvider>
         </UserProvider>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
