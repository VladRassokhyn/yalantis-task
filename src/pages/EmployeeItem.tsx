import React from 'react';
import { TEmployees } from '../types';
import { useDispatch } from 'react-redux';
import { setActive } from '../actions';

export const EmployeeItem: React.FC<{ employee: TEmployees }> = ({
  employee,
}) => {
  const dispatch = useDispatch();

  return (
    <div className={'employee-item-wrapper'}>
      <h3 style={{ color: employee.active ? 'blue' : 'black' }}>
        {employee.lastName} {employee.firstName}
      </h3>
      <span>
        <input
          type={'radio'}
          checked={employee.active}
          onChange={() => dispatch(setActive(employee.id))}
        />
        <label>active</label>
      </span>
      <span>
        <input
          type={'radio'}
          checked={!employee.active}
          onChange={() => dispatch(setActive(employee.id))}
        />
        <label>not active</label>
      </span>
    </div>
  );
};
