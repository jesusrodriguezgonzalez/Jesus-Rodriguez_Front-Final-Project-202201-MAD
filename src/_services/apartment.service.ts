import axios from 'axios';
import { ApartmentI } from '../_utils/interfaces';

const APARTMENTS_URL = 'http://localhost:5000/apartments';

export function newApartment(apartment: ApartmentI) {
  return axios.post(APARTMENTS_URL, apartment);
}

export function getAllApartments() {
  return axios.get(APARTMENTS_URL);
}
