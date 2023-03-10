const AnimeReducer = (state, action) => {
  switch (action.type) {

    case "GET_RECENT_AND_POPULAR":
      return {
        ...state,
        popularandrecentReleaseAndAiring: action.payload,
        loading: false,
      };


    case "GET_ANIME":
      return {
        ...state,
        searchedAnimes: action.payload,
        loading:  false,
      };

    case "GET_SINGLE_ANIME_DETAIL":
      return {
        ...state,
        animeDetails: action.payload,
        loading: false,
      };


      case "GET_WALLS":
        return {
          ...state,
          walls:  action.payload,
          loading: false,
        };
  

      case "SET_LOADING":
        return {
          ...state,
          loading: true,
        };

    case "CLEAR_ANIME_DETAIL":
      return {
        ...state,
        animeDetails: [],
      };



      case "CLEAR":
        return {
          ...state,
          searchedAnimes: []
        };



    default:
      return state;
  }
};

export default AnimeReducer;
