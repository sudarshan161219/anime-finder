const AnimeReducer = (state, action) => {
  switch (action.type) {

    case "GET_ANIME":
      return {
        ...state,
        animes: action.payload,
        loading: false,
      };

      case "GET_SINGLE_ANIME":
        return {
          ...state,
          anime: action.payload,
          loading: true,
        };
  

      case "SET_LOADING":
        return {
          ...state,
          loading: true,
        };

      // case "CLEAR":
      //   return {
      //     ...state,
      //     animes:[]
      //   };

      //   case "CLEAR_ANIME":
      //     return {
      //       ...state,
      //       anime:[]
      //     };

    default:
      return state;
     
  }
};

export default AnimeReducer ;
