import { combineReducers } from 'redux';
import commonReducer from './common/reducer';
import authReducer from './auth/reducer';
import userReducer from './users/reducer';


const rootReducer = combineReducers({
	commonReducer,
	authReducer,
	userReducer
});


export default rootReducer;
