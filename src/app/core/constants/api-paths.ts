export const ApiPaths = {
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    REFRESH_TOKEN: '/auth/refresh',
  },
  USER: {
    GET_ALL: '/users',
    GET_BY_ID: (id: number) => `/users/${id}`,
    UPDATE: (id: number) => `/users/${id}`,
  },
  PRODUCTS: {
    LIST: '/products',
    DETAILS: (id: number) => `/products/${id}`,
  },
};
