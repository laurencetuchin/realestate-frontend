import axios from 'axios';

export const API = axios.create({
	// The base URL is required in an axios instance
	// baseURL: import.meta.env.VITE_APP_API_ENDPOINT || "https://realestate-app123.netlify.app/",
	baseURL: "https://realestate-rails-api.herokuapp.com/",
	// I set the time out for request to be 10 seconds
	timeout : 10000,
    // I set the request can have cookies
    'Access-Control-Allow-Credentials':true
})


// I set the headers for the request
API.interceptors.request.use((config) => {
    // I set the headers for the request
    config.headers.common['Authorization'] = `Bearer ${localStorage.getItem('authToken')}` || '';
    config.headers.common['Access-Control-Allow-Origin'] = 'https://realestate-rails-api.herokuapp.com/';
    config.headers.common['Content-Type'] = 'application/json;charset=UTF-8';
      return config;
    }, (err) => {
      if (err.response) { 
          // Dealing with specific status code
        switch (err.response.status) {
          case '403':
            // todo: handler server forbidden error
            break;
            // todo: handler other status code
          default:
            break;
        }
        return Promise.reject(err.response);
      }
          // Dealing with off line
      if (!window.navigator.online) { 
        // todo: jump to offline page
        return 
      }
      return Promise.reject(err);
    });
  
  
  export default API