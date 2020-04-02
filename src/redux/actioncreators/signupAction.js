import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE } from '../actiontypes'
import { toastr } from 'react-redux-toastr'
import { axiosWithToken } from '../../utils/axios_config'

export const signupRequest = () => ({
    type: SIGNUP_REQUEST
});

export const signupSuccess = () => ({
    type: SIGNUP_SUCCESS
});

export const signupFailure = () => ({
    type: SIGNUP_FAILURE
});

export const signupFunction = (userData) => dispatchEvent => {
    console.log(userData)
    dispatchEvent(signupRequest());
    axiosWithToken.post(`api/v1/user/register/`, { ...userData },)
        .then(res => {
            dispatchEvent(signupSuccess());
            toastr.success('Successfully signed up')
        })
        .catch(err => {
            console.log(err)
            dispatchEvent(signupFailure());
            toastr.error('error fuck this shit')
        })
}

export default signupFunction;