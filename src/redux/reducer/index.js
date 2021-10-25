import { combineReducers, } from 'redux';
import {test,user,courseList,matchRoute,token} from './global';

const CombineReducers = combineReducers({
    test,
    user,
    courseList,
    matchRoute,
    token
});

export default CombineReducers;
