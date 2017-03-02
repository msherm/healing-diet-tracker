import { combineReducers } from 'redux';

//Reducers
import dietsReducer from './diets-reducer';
import dietBuilderReducer from './dietbuilder-reducer';

//Combine Reducers
var reducers = combineReducers({
		dietsState: dietsReducer,
		dietBuilderState: dietBuilderReducer,
});

export default reducers;