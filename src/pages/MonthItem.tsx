import React from 'react';
import { TEmployees } from '../types';
import moment from 'moment';

export const MonthItem: React.FC<{ employees: TEmployees[]; month: string }> =
  ({ employees, month }) => {
    return (
      <div className={'month-item-wrapper'}>
        <h2>{month}</h2>
        {employees.map(employee => {
          return (
            <li key={employee.id}>
              {employee.lastName} {employee.firstName} -{' '}
              {moment(employee.dob).format('D MMMM, YYYY')} year
            </li>
          );
        })}
      </div>
    );
  };