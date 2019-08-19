import *as types from '../constants/task';

let initialState = [];

const myReducer = (state = initialState, action) =>{
    switch(action.type){
        case types.FETCH_TASK:
           
            state = action.task;
            return [...state];
        default:
            return state;
    };
};

export default myReducer;