import { RETRIEVE_DIET, ADD_DIET } from '../actions/action-types';

const initialState = {
  diets: [
  	{
  		name: "Dr. Pagano's 80/20 Diet",
      conditions: ["psoriasis", "eczema"],
      duration: {
        minimum: "3 Months",
        maximum: "Indefinite"
      }
  	}
  ]
};

const dietsReducer = function(state = initialState, action) {
  switch (action.type) {
    case ADD_DIET:
      return Object.assign({}, state, { diets: [...state.diets, { name: action.name, conditions: action.conditions, routine: action.routine, duration: action.duration, permitted: action.permitted } ] });
  }

	return state;
}

export default dietsReducer;