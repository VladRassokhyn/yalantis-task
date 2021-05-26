export type TEmployees = {
  id: string;
  firstName: string;
  lastName: string;
  dob: string;
  active: boolean;
};

export type TSetEmpoyees = { type: string; payload: TEmployees[] };
export type TActiveToggle = { type: string; id: string };

export type TEmployeesActions = TSetEmpoyees & TActiveToggle;
