// import { createReducer, on } from '@ngrx/store';
// import * as AuthActions from './auth.actions';
// import { User } from '../../shared/models/user.model';

// export interface AuthState {
//   user: User | null;
//   token: string | null;
//   error: string | null;
//   loading: boolean;
// }

// export const initialState: AuthState = {
//   user: null,
//   token: null,
//   error: null,
//   loading: false,
// };

// export const authReducer = createReducer(
//   initialState,
//   on(AuthActions.login, (state) => ({ ...state, loading: true })),
//   on(AuthActions.loginSuccess, (state, { user, token }) => ({
//     ...state,
//     user,
//     token,
//     loading: false,
//   })),
//   on(AuthActions.loginFailure, (state, { error }) => ({
//     ...state,
//     error,
//     loading: false,
//   })),
//   on(AuthActions.logout, () => initialState)
// );
