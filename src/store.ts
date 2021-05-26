import { combineReducers, createStore, applyMiddleware } from 'redux';
import { employeesReducer } from './reducers/employeesReducer';
import thunk from 'redux-thunk';

const rootReducers = combineReducers({
  employees: employeesReducer,
});

type RootReducersType = typeof rootReducers;
export type GlobalStateType = ReturnType<RootReducersType>;

export const store = createStore(rootReducers, applyMiddleware(thunk));
