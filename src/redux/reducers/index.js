import { combineReducers } from 'redux';
import { signupReducer } from '../reducers/signupReducer';
import { loginReducer } from '../reducers/loginReducer';
import { reducer as toastrReducer } from 'react-redux-toastr';


const rootReducer = combineReducers({
    signupReducer,
    loginReducer,
    toastr: toastrReducer,
});

export default rootReducer;