import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actiontypes'
import { toastr } from 'react-redux-toastr';
import { axiosWithToken } from '../../utils/axios_config'


export const loginRequest = () => ({
    type: LOGIN_REQUEST
});

export const loginSuccess = () => ({
    type: LOGIN_SUCCESS
});

export const loginFailure = () => ({
    type: LOGIN_FAILURE
});

export const loginFunction = (loginData) => dispatchEvent => {
    dispatchEvent(loginRequest());
    axiosWithToken.post(`api/v1/user/login/`, { ...loginData },)
        .then(res => {
            dispatchEvent(loginSuccess())
            toastr.success("Login Successful")
        })
        .catch(err => {
            dispatchEvent(loginFailure())
            toastr.error('Error, Login failed. Please check your credentials')
        })
}

export default loginFunction;