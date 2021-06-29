import { combineReducers } from 'redux';
import { uiReducer } from './ui/ui.reducer';

export const rootReducers = combineReducers({
  ui: uiReducer,
});
