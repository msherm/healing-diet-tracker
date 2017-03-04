import * as types from './action-types';

//Builder
export const updateDietName = (name) => {
	return {
		type: types.UPDATE_DIET_NAME,
		name
	}
}

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

export const updateDuration = (minimum, maximum) => {
	return {
		type: types.UPDATE_DURATION,
		minimum,
		maximum
	}
}

export const addDiet = (name, conditions, routine, permitted, duration) => {
	return {
		type: types.ADD_DIET,
		name,
		conditions,
		routine,
		permitted,
		duration
	}
}