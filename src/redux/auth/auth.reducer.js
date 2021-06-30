import { authTypes } from './auth.types';

const initialState = {
  id: null,
  name: null,
};

export function authReducer(state = initialState, action) {
  switch (action.type) {
    case authTypes.LOGIN:
      return {
        ...state,
        id: action.payload.id,
        name: action.payload.name,
      };
    default:
      return state;
  }
}
