import * as types from './action-types';

//Builder
export const addCondition = (condition) => {
	return {
		type: types.ADD_CONDITION,
		condition
	}
}

export const addPermittedDetail = (frequency, category, detail, description) => {
	return {
		type: types.ADD_PERMITTED_DETAIL,
		frequency,
		category,
		detail,
		description
	}
}

export const addDiet = (name, conditions, preDietCleanse, routine, permitted, duration) => {
	return {
		type: types.ADD_DIET
	}
}