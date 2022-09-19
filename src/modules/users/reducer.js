// import { GET_PROFILE, UPDATE_PROFILE } from './actions';

const defaultVisualState = {};
const initialState = {
  // [GET_PROFILE]: { ...defaultVisualState },
  // [UPDATE_PROFILE]: { ...defaultVisualState },

  data: [],
  profile: {},
  loading: {},
  isEditing: {},
};

function usersReducer(state = initialState, { type, payload }) {
  switch (type) {
    
    default:
      return state;
  }
}

export default usersReducer;
