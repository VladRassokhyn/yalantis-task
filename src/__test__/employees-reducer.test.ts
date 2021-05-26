import { employeesReducer } from '../reducers/employeesReducer';
import { TActiveToggle, TEmployees, TSetEmpoyees } from '../types';

const state: TEmployees[] = [
  {
    id: '1',
    firstName: 'string',
    lastName: 'C',
    dob: 'string',
    active: false,
  },
  {
    id: '2',
    firstName: 'string',
    lastName: 'A',
    dob: 'string',
    active: false,
  },
  {
    id: '3',
    firstName: 'string',
    lastName: 'B',
    dob: 'string',
    active: false,
  },
];
const payload = [
  {
    id: '4',
    firstName: 'string',
    lastName: 'D',
    dob: 'string',
    active: false,
  },
  {
    id: '5',
    firstName: 'string',
    lastName: 'E',
    dob: 'string',
    active: false,
  },
  {
    id: '6',
    firstName: 'string',
    lastName: 'F',
    dob: 'string',
    active: false,
  },
];

it('SET_EMPLOYEES must add employees to state', () => {
  const action: TSetEmpoyees = { type: 'SET_EMPLOYEES', payload };

  expect(employeesReducer(state, action)).toHaveLength(6);
});

it('employees must be sorted by lastName', () => {
  const action: TSetEmpoyees = { type: 'SET_EMPLOYEES', payload };

  expect(employeesReducer(state, action)[0].lastName).toEqual('A');
  expect(employeesReducer(state, action)[1].lastName).toEqual('B');
  expect(employeesReducer(state, action)[2].lastName).toEqual('C');
});

it('ACTIVE_TOGGLE must change "active" status', () => {
  const action: TActiveToggle = { type: 'ACTIVE_TOGGLE', id: '2' };

  expect(employeesReducer(state, action)[0].active).toEqual(false);
  expect(employeesReducer(state, action)[1].active).toEqual(true);
  expect(employeesReducer(state, action)[2].active).toEqual(false);
});

it('ACTIVE_TOGGLE must save "active" status to localStorage', () => {
  const action: TActiveToggle = { type: 'ACTIVE_TOGGLE', id: '2' };

  const item = employeesReducer(state, action)[2];

  expect(item.active).toEqual(Boolean(window.localStorage.getItem(item.id)));
});
