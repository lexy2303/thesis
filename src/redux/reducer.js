import { LOGIN_SUCCESS, LOGOUT } from './actions';

const initialState = {
  likedVinyls: [],
  isAuthenticated: false,  
};

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITES":
      return {
        ...state,
        likedVinyls: [...state.likedVinyls, action.payload.band],
      };
      
      case "REMOVE_FROM_FAVORITES": {
        const updatedFavorites = state.likedVinyls.filter((band) => band.id !== action.payload.bandId);

        return {
          ...state,
          likedVinyls: updatedFavorites,
        }
      }

      case LOGIN_SUCCESS:
        return {
          ...state,
          isAuthenticated: true,
        };

        case LOGOUT:
          return {
            ...state,
            isAuthenticated: false,
          };    

    default:
      return state;
  }
};

export default favoritesReducer;
