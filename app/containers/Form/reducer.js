import { FORM_SUCCESS } from './constants';

// The initial state of the App
export const initialState = {
  data: { test: '' },
};

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case FORM_SUCCESS:
      return { ...state, data: action };
    default:
      return state;
  }
}

export default homeReducer;
