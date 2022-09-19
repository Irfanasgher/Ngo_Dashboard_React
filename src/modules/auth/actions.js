import { REQUEST, SUCCESS, FAILURE, createRequestTypes, action } from '../common/actions';

export const SIGN_IN = createRequestTypes('SIGN_IN');
export const SIGN_UP = createRequestTypes('SIGN_UP');
export const SIGN_OUT = createRequestTypes('SIGN_OUT');
const authActions = {
	signin: {
		request: (data) => action(SIGN_IN.REQUEST, { payload: data }),
		success: (data) => action(SIGN_IN.SUCCESS, { payload: data }),
		failure: (data) => action(SIGN_IN.FAILURE, { payload: data })
	},
	signup: {
		request: (data) => action(SIGN_UP.REQUEST, { payload: data }),
		success: (data) => action(SIGN_UP.SUCCESS, { payload: data }),
		failure: (data) => action(SIGN_UP.FAILURE, { payload: data })
	},
	signout: {
		request: (data) => action(SIGN_OUT.REQUEST, { payload: data }),
		success: (data) => action(SIGN_OUT.SUCCESS, { payload: data }),
		failure: (data) => action(SIGN_OUT.FAILURE, { payload: data })
	}
};
export default authActions;
