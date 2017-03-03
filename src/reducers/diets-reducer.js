import { RETRIEVE_DIET, ADD_DIET } from '../actions/action-types';

const initialState = {
  diets: [
  	{
  		name: "Dr. Pagano's 80/20 Diet",
      conditions: ["psoriasis", "eczema"],
      duration: {
        minimum: "3 Months",
        maximum: "Indefinite"
      },
      permitted: {
        always: {
          food: [
            {
              detail: "yogurt",
              description: "maximum of 1 cup per day"
            },
            {
              detail: "almonds",
              description: "10 - 15 per day"
            },
            {
              detail: "apples",
              description: "Between meals"
            }
          ],
          activity: [
            {
              detail: "jogging",
              description: "Try to jog at least 5 times per week"
            }
          ]
        },
        sometimes: {
          food: [
            {
              detail: "corn",
              description: "White corn only. Eat only sparingly"
            },
            {
              detail: "wheat bread",
              description: "Limit to 1 slice a day no more than 4 times a week"
            },
            {
              detail: "red wine",
              description: "Only on occasion. Limit to 2 to 4 oz"
            }
          ],
          activity: [
            {
              detail: "weight lifting",
              description: "Limit to twice a week to avoid excessive strain"
            }
          ]
        },
        never: {
          food: [
            {
              detail: "tomato",
              description: "nightshade: avoid at all costs"
            },
            {
              detail: "beer",
              description: "delicious but dangerous"
            }
          ],
          activity: [
            {
              detail: "football",
              description: "Important to avoid sports that are heavy impact or may cause cuts and bruises"
            }
          ]
        }
      }
  	}
  ]
};

const dietsReducer = function(state = initialState, action) {
  switch (action.type) {
    case ADD_DIET:
      const diets = state.diets.slice();
      diets.push({ name: action.name, conditions: action.conditions, routine: action.routine, duration: action.duration, permitted: action.permitted });
      return Object.assign({}, state, { diets: diets });
  }

	return state;
}

export default dietsReducer;