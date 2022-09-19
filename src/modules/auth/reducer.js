import { SET_INITIAL_STATE } from "../common/actions";
// import { getUserId } from '../common/utils';
import { SIGN_IN, SIGN_UP, SIGN_OUT } from "./actions";

const initialState = {
  user: "",
  loading: false,
  error: false,
  accessToken: "",
  refreshToken: "",
};

function authReducer(state = initialState, { type, payload }) {
  switch (type) {
    case SIGN_IN.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SIGN_IN.SUCCESS:
      return {
        ...state,
        user: payload.user,
        refreshToken: payload.tokens.refresh.token,
        accessToken: payload.tokens.access.token,
        loading: false,
      };
    case SIGN_IN.FAILURE:
      return {
        ...state,
        loading: false,
      };

    case SIGN_UP.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SIGN_UP.SUCCESS:
      return {
        ...state,
        user: payload.user,
        refreshToken: payload.tokens.refresh.token,
        accessToken: payload.tokens.access.token,
        loading: false,
      };
    case SIGN_UP.FAILURE:
      return {
        ...state,
        loading: false,
      };
    case SIGN_OUT.REQUEST:
      return {
        ...state,
      };
    case SIGN_OUT.SUCCESS:
      console.log("SIGN_OUT.SUCCESS called");
      return {
        user: "",
        loading: false,
        error: false,
        accessToken: "",
        refreshToken: "",
      };
    case SIGN_OUT.FAILURE:
      return {
        ...state,
      };
    // case 'SIGN_OUT':
    // 	console.log('Signout action called');
    // 	return {
    // 		...state,
    // 		user: '',
    // 		refreshToken: '',
    // 		accessToken: ''
    // 	};
    default:
      return state;
  }
}

export default authReducer;
