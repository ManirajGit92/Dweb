import { environment } from '../../../environments/environment';

const BASE_URL = environment.apiBaseUrl;
export const API_PATHS = {
  USERS: BASE_URL + 'users',
};
