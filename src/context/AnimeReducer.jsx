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
        loading: false,
      };

    case "GET_SINGLE_ANIME_DETAIL":
      return {
        ...state,
        animeDetails: action.payload,
        loading: false,
      };

    case "GET_RECENT_AND_POPULAR":
      return {
        ...state,
        popularandrecentRelease: action.payload,
        loading: false,
        // loading: true,
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

      case "CLEAR":
        return {
          ...state,
          animes: []
        };

    default:
      return state;
  }
};

export default AnimeReducer;
