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
          loading:true,
        };
  
        case "GET_SINGLE_ANIME_DETAIL":
          return {
            ...state,
            animeDetails: action.payload,
            loading: true,
          };

          case "CLEAR_ANIME_DETAIL":
            return {
              ...state,
              animeDetails: [],
            };

      case "SET_LOADING":
        return {
          ...state,
          loading: true,
        };

    default:
      return state;
     
  }
};

export default AnimeReducer ;
