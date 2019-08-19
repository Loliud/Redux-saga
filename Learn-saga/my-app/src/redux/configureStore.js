import {createStore, compose, applyMiddleware} from 'redux';
import myReducer from '../reducers/myReducer';
import thunk from 'redux-thunk';


const configureStore = () =>{
    const middlewares = [thunk];
    const enhancers = [applyMiddleware(...middlewares)];
    const store = createStore(myReducer, compose(...enhancers));
    return store;
};


export default configureStore;