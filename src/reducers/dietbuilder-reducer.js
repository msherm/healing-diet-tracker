import { ADD_CONDITION, ADD_PERMITTED_DETAIL } from '../actions/action-types';

const initialState = {
  name: '',
  conditions: [],
  preDietCleanse: false,
  routine: [],
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
  },
  duration: { minimum: 0, maximum: 0 }
};

//TODO: separate permitted into separate reducer to eliminate need for deepClone
const deepClone = (obj) => {
    if (obj === null || typeof obj !== "object") {
      return obj;
    }

    const copy = obj.constructor();

    for (let attr in obj) {
        if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
    }

    return copy;
}

const dietBuilderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONDITION:
      return Object.assign({}, state, { conditions: [...state.conditions, action.condition] });
    case ADD_PERMITTED_DETAIL:
      const permitted = deepClone(state.permitted);
      const permittedList = state.permitted[action.frequency][action.category].slice();
      permitted[action.frequency][action.category].push({ detail: action.detail, description: action.description} );
      return Object.assign({}, state, { conditions: [...state.conditions, action.condition] });
  }

	return state;
}

export default dietBuilderReducer;