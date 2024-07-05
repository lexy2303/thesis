export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT        = 'LOGOUT';

export const addToFavorites = (band) => ({
  type: "ADD_TO_FAVORITES",
  payload: { band },
});

export const removeFromFavorites = (bandId) => ({
  type: "REMOVE_FROM_FAVORITES",
  payload: { bandId },
});

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
});

export const logout = () => ({
  type: LOGOUT,
});
