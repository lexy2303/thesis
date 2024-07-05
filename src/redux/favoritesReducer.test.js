import favoritesReducer          from '../redux/reducer';
import { LOGIN_SUCCESS, LOGOUT } from '../redux/actions';

describe('favoritesReducer', () => {
  const initialState = {
    likedVinyls: [],
    isAuthenticated: false,
  };

  it('should return the initial state', () => {
    expect(favoritesReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle ADD_TO_FAVORITES', () => {
    const band = { id: 1, name: 'Band 1' };
    const action = { type: 'ADD_TO_FAVORITES', payload: { band } };
    const expectedState = {
      ...initialState,
      likedVinyls: [band],
    };
    expect(favoritesReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle REMOVE_FROM_FAVORITES', () => {
    const initialStateWithFavorites = {
      ...initialState,
      likedVinyls: [{ id: 1, name: 'Band 1' }, { id: 2, name: 'Band 2' }],
    };
    const action = { type: 'REMOVE_FROM_FAVORITES', payload: { bandId: 1 } };
    const expectedState = {
      ...initialState,
      likedVinyls: [{ id: 2, name: 'Band 2' }],
    };
    expect(favoritesReducer(initialStateWithFavorites, action)).toEqual(expectedState);
  });

  it('should handle LOGIN_SUCCESS', () => {
    const action = { type: LOGIN_SUCCESS };
    const expectedState = {
      ...initialState,
      isAuthenticated: true,
    };
    expect(favoritesReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle LOGOUT', () => {
    const initialStateWithAuth = {
      ...initialState,
      isAuthenticated: true,
    };
    const action = { type: LOGOUT };
    const expectedState = {
      ...initialState,
      isAuthenticated: false,
    };
    expect(favoritesReducer(initialStateWithAuth, action)).toEqual(expectedState);
  });
});
