export default function reducer(state, action) {
    switch (action.type) {
  
      // case "setCardsData": {
      //   console.log("CardData:", action.type);
      //   return {
      //     ...state,
      //     cards: action.payload,
      //   };
      // }
      // set the user to current logged in user and change the loaded state to true
      case "setLoggedInUser": {
        console.log("loggedInUser:", action.payload);
        return {
          ...state,
          token: action.payload
        };
      }
     
      case "setLogOut":
        return {
          ...state,
          token: null
        };
  
      default:
        return state;
    }
  }