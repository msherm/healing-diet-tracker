import { TOGGLE_DIET_BUILDER } from '../actions/action-types';

const initialState = {
  builderVisible: false
};

const appReducer = function(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_DIET_BUILDER:
      return Object.assign({}, state, { builderVisible: !state.builderVisible });
  }

	return state;
}

export default appReducer;