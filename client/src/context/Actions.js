export const LoginStart = (userCredentials) => ({
    type: "LOGIN_START"
});

export const LoginSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    payload: user,
});

export const LoginFailure = () => ({
    type: "LOGIN_FAILURE",
});

export const Logout = () => ({
    type: "LOGOUT",
});

export const UpdateStart = (userCredentials) => ({
    type: "LOGIN_START"
});

export const UpdateSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    payload: user,
});

export const UpdateFailure = () => ({
    type: "LOGIN_FAILURE",
});