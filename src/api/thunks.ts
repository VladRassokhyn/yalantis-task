import { EmployeesAPI } from './api';
import { Dispatch } from 'react';
import { TSetEmployees } from '../types';
import { setEmployees } from '../actions';

export const getEmployees = () => {
  return async (dispatch: Dispatch<TSetEmployees>) => {
    try {
      const payload = await EmployeesAPI.getEmployees();
      dispatch(setEmployees(payload.data));
    } catch (err) {
      console.log(err.message);
    }
  };
};
