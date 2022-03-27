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
  incidents?: any;
}

export interface ApartmentI {
  cp: number;
  province: string;
  direction: string;
  owner: number;
}

export interface PayloadUpdateI {
  alias: string;
  cp: number;
  direction: string;
  idApartment: string;
  owner: string;
  province: string;
}

export interface LoadApartmentI {
  alias: string;
  cp: number;
  current_tenant: any;
  direction: string;
  history_tenant: any;
  incidents: any;
  owner: any;
  photos: string;
  province: string;
  status: string;
  _id: string;
}

export interface StateApartmentsI {
  apartments: LoadApartmentI;
  status: any;
}

export interface IncidentI {
  description?: string;
  idIncident?: string;
  id_apartment?: any;
  id_user?: string;
  priority?: string;
  state?: string;
  title?: string;
  type_incidence?: string;
}

export interface UserDataI {
  _id?: string;
  age?: number;
  apartment_history?: object[];
  apartments_owner?: object[];
  city?: string;
  current_apartment?: object[];
  direction?: string;
  email?: string;
  name?: string;
  phone?: number;
  rol?: string;
  surname?: string;
  image?: string;
}

export interface UserRegisterI {
  age?: number;
  city?: string;
  direction?: string;
  email?: string;
  name?: string;
  image?: string;
  passwd?: string;
  phone?: number;
  rol?: string;
  surname?: string;
}
