import React, { useEffect } from 'react';
import { EmployeesBirthList } from './EmployeesBirthList';
import { EmployeesList } from './EmployeesList';
import { GlobalStateType } from '../../store';
import { useSelector } from '../../customUseSelector';
import { getEmployees } from '../../api';
import { useDispatch } from 'react-redux';

export const EmployeesPage: React.FC = () => {
  const dispatch = useDispatch();
  const { employees } = useSelector<GlobalStateType>(state => ({
    employees: state.employees,
  }));

  useEffect(() => {
    dispatch(getEmployees());
  }, []);

  return (
    <div className={'wrapper'}>
      <h1>Employees</h1>
      <h1>Employees birthday</h1>
      <EmployeesList employees={employees} />
      <EmployeesBirthList
        employees={[...employees.filter(employee => employee.active)]}
      />
    </div>
  );
};
