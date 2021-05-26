export type TEmployees = {
  id: string;
  firstName: string;
  lastName: string;
  dob: string;
  active: boolean;
};

export type TSetEmployees = { type: "SET_EMPLOYEES"; payload: TEmployees[] };
export type TActiveToggle = { type: "ACTIVE_TOGGLE", id: string };

export type TEmployeesActions = TSetEmployees | TActiveToggle;
