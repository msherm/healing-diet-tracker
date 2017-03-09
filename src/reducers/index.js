import { combineReducers } from 'redux';

//Reducers
import appReducer from './app-reducer';
import dietsReducer from './diets-reducer';
import dietBuilderReducer from './dietbuilder-reducer';

//Combine Reducers
var reducers = combineReducers({
		appState: appReducer,
		dietsState: dietsReducer,
		dietBuilderState: dietBuilderReducer,
});

export default reducers;