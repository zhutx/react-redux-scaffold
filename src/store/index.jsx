import { createStore, compose } from 'redux';
import rootReducers from '../reducers';

const storeEnhancers = compose(
    (window && window.devToolsExtension) ? window.devToolsExtension() : (f) => f
);

const initialState = {};

export default createStore(rootReducers, initialState, storeEnhancers);
