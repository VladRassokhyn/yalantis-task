import { Reducer } from 'redux';
import { TEmployees, TEmployeesActions } from '../types';

const initialState: TEmployees[] = [];

export const employeesReducer: Reducer<TEmployees[], TEmployeesActions> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case 'SET_EMPLOYEES':
      const newState = [
        ...state,
        ...action.payload.map(employee => {
          employee.active = Boolean(window.localStorage.getItem(employee.id));
          return employee;
        }),
      ];
      return newState.sort(
        (a, b) => a.lastName.charCodeAt(0) - b.lastName.charCodeAt(0),
      );

    case 'ACTIVE_TOGGLE':
      return [
        ...state.map(employee => {
          if (employee.id === action.id) {
            const active = !employee.active;
            window.localStorage.setItem(employee.id, String(active));
            return { ...employee, active };
          } else {
            return employee;
          }
        }),
      ];

    default:
      return state;
  }
};
