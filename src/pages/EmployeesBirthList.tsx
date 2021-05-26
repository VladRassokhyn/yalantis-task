import moment from 'moment';
import React from 'react';
import { TEmployees } from '../types';
import { MonthItem } from './MonthItem';

export const EmployeesBirthList: React.FC<{ employees: TEmployees[] }> = ({
  employees,
}) => {
  const months = moment.months();
  const nextMonths = months
    .concat(months.slice(0, moment().month()))
    .slice(-12);

  return (
    <div className={'employees-birth-list-wrapper'}>
      <div className={'months-wrapper'}>
        {nextMonths.map(month => {
          const monthEmployees = employees.filter(
            employee => moment(employee.dob).format('MMMM') === month,
          );
          if (monthEmployees.length !== 0) {
            return (
              <MonthItem key={month} month={month} employees={monthEmployees} />
            );
          } else return null;
        })}
      </div>
    </div>
  );
};
