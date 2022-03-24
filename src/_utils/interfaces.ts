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
  current_apartment?: string;
  _id?: string;
  email?: string;
  name?: string;
  surname?: string;
  age?: string;
  phone?: string;
  city?: string;
  direction?: string;
  apartment_history?: string;
  rol?: string;
  id?: string;
  token?: string;
  status?: any;
  message?: any;
  type?: any;
  apartments?: any;
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

export interface UserDataI {
  _id: string;
  age: number;
  apartment_history: object[];
  apartments_owner: object[];
  city: string;
  current_apartment: object[];
  direction: string;
  email: string;
  name: string;
  phone: number;
  rol: string;
  surname: string;
}
