import { combineReducers } from 'redux'
import { StoreTypes } from '../../types';
import {getUSerReducer} from '../Reducer/UserReducer'
import { countReducer } from './SagaReducer';
import { getThunkReducer } from './ThunkReducer';
const rootReducer=combineReducers<StoreTypes>({
    allUsers:getUSerReducer,
    allThunkUsers:getThunkReducer,
    countData:countReducer
})
export default rootReducer;