import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import Reducer from '../Reducers/reducer';

const Store = createStore(Reducer, composeWithDevTools());

export default Store;
