import {compose, createStore, applyMiddleware} from 'redux';
import rootReducer from './Ducks';

//instalo e importo el thunk para trabajar asincronicamente
import thunk from 'redux-thunk';

// esto es para usar la herramienta de Redux de Chrome y ver los estados
const composeEnhancers = (typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)||compose;

export default  createStore(rootReducer, 
    composeEnhancers(applyMiddleware(thunk))
    );