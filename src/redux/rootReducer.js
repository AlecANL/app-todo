import { combineReducers } from 'redux';
import { authReducer } from './auth/auth.reducer';
import { taskReducer } from './tasks/task.reducer';
import { uiReducer } from './ui/ui.reducer';

export const rootReducers = combineReducers({
  ui: uiReducer,
  tasks: taskReducer,
  auth: authReducer,
});
