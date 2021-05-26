import { TActiveToggle, TEmployees, TSetEmployees } from '../types';

export const setEmployees = (payload: TEmployees[]): TSetEmployees => ({
  type: 'SET_EMPLOYEES',
  payload,
});

export const setActive = (id: string): TActiveToggle => ({
  type: 'ACTIVE_TOGGLE',
  id,
});
