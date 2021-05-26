import axios, { AxiosResponse } from 'axios';
import { TEmployees } from '../types';

const instance = axios.create({
  baseURL: `https://yalantis-react-school-api.yalantis.com/api/`,
});

export const EmployeesAPI = {
  getEmployees(): Promise<AxiosResponse<TEmployees[]>> {
    return instance.get<TEmployees[]>('task0/users');
  },
};
