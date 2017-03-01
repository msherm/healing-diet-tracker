import { combineReducers } from 'redux';

//Reducers
import dietsReducer from './diets-reducer';

//Combine Reducers
var reducers = combineReducers({
		dietsState: dietsReducer,
});

export default reducers;