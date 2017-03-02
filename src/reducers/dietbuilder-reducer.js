import { ADD_CONDITION } from '../actions/action-types';

const initialState = {
  name: '',
  conditions: [],
  preDietCleanse: false,
  routine: [],
  permitted: {
    always: [],
    sometimes: [],
    never: []
  },
  duration: { minimum: 0, maximum: 0 }
};

const dietBuilderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONDITION:
      return Object.assign({}, state, { conditions: [...state.conditions, action.condition] });
  }

	return state;
}

export default dietBuilderReducer;