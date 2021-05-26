import React from 'react';
import { TEmployees } from '../../types';
import { AlphaItem } from './AlphaItem';

export const EmployeesList: React.FC<{ employees: TEmployees[] }> = ({
  employees,
}) => {
  const alphabet = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];

  return (
    <div className={'employees-list-wrapper'}>
      {alphabet.map(char => {
        return (
          <AlphaItem
            key={char}
            char={char}
            employees={employees.filter(
              employee => employee.lastName[0] === char,
            )}
          />
        );
      })}
    </div>
  );
};
