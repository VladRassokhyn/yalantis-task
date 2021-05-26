import React from 'react';
import { TEmployees } from '../../types';
import { EmployeeItem } from './EmployeeItem';

export const AlphaItem: React.FC<{ char: string; employees: TEmployees[] }> = ({
  char,
  employees,
}) => {
  return (
    <div className={'alpha-item-wrapper'}>
      <h2>{char}</h2>
      {employees.length === 0 && '-----'}
      {employees.map(employee => (
        <EmployeeItem key={employee.id} employee={employee} />
      ))}
    </div>
  );
};
