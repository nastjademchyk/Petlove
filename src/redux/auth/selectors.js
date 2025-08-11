export const selectUser = state => state.auth.user;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectAuthToken = state => state.auth.token;

export const selectAuthError = state => state.auth.error;
