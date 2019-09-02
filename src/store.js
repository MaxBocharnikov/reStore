import { createStore, applyMiddleware} from 'redux';
import reducer from './reducers';
import thunkMiddleWare from 'redux-thunk';

const logMiddleWare = ({getState}) => (next) => (action) => {
  console.log(action.type, getState());
  return next(action);
};

const stringMiddleWare = () => (next) => (action) => {
    if (typeof action === 'string') {
        return next({
           type: action
        });
    }

    return next(action);
};


const store = createStore(reducer, applyMiddleware(thunkMiddleWare, stringMiddleWare, logMiddleWare));

const delayedActionCreator = (timeout) => (dispatch) => {
    setTimeout(() => dispatch({
        type: 'DELAYED_ACTION'
    }), timeout)
};



store.dispatch(delayedActionCreator(3000));
export default store;
