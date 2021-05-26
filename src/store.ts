import { combineReducers, createStore, applyMiddleware } from 'redux';
import { employeesReducer } from './reducers/employeesReducer';
import thunk from 'redux-thunk';

const rootReducers = combineReducers({
  employees: employeesReducer,
});

export type GlobalStateType = ReturnType<typeof rootReducers>;

export const store = createStore(rootReducers, applyMiddleware(thunk));
