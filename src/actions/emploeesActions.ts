import { TActiveToggle, TEmployees, TSetEmpoyees } from '../types';

export const setEmployees = (payload: TEmployees[]): TSetEmpoyees => ({
  type: 'SET_EMPLOYEES',
  payload,
});

export const setActive = (id: string): TActiveToggle => ({
  type: 'ACTIVE_TOGGLE',
  id,
});
