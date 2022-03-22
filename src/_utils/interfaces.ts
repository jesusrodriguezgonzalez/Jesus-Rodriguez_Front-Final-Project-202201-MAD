export interface UserI {
  email: string;
  passwd: string;
  name: string;
  surname: string;
  age: number;
  direction: string;
  phone: number;
  city: string;
}

export interface UserLoginI {
  email: string;
  passwd: string;
  token: string;
}
export interface StateI {
  type: string | null;
  message: string | null;
  status: any;
  user: any;
}

export interface ApartmentI {
  cp: number;
  province: string;
  direction: string;
  owner: number;
}

export interface IncidentI {
  title: string;
  type_incidence: string;
  description: string;
  priority: string;
  state: string;
  id_apartment: number;
}
