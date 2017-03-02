import { ADD_DIET } from '../actions/action-types';

const initialState = {
  builder: {
    name: "",
    conditions: [],
    preDietCleanse: false,
    routine: [],
    permitted: {
      always: [],
      sometimes: [],
      never: []
    },
    duration: { minimum: 0, maximum: 0 }
  }
};

const dietBuilderReducer = function(state = initialState, action) {
	return state;
}

export default dietBuilderReducer;