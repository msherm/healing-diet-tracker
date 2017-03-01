import * as types from './action-types';

//Diets
export const addDiet = (name, conditions, preDietCleanse, duration) => {
	return {
		type: types.ADD_DIET
	}
}