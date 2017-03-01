import { ADD_DIET } from '../actions/action-types';

const initialState = {
  diets: [
  	{
  		name: "Dr. Pagano's 80/20 Diet",
      conditions: ["psoriasis", "eczema"],
  		preDietCleanse: true,
      duration: {
        minimum: "3 Months",
        maximum: "Indefinite"
      }
  	}
  ]
};

const dietsReducer = function(state = initialState, action) {
	return state;
}

export default dietsReducer;