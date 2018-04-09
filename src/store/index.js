import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

export function configureStore(initialState) {
    const store = createStore(
        rootReducer,
        initialState,
        composeWithDevTools(applyMiddleware(logger, thunk)
        ),
        (localStorage['redux-store']) ?
            JSON.parse(localStorage['redux-store']) :
            {})
    store.subscribe(() => {
        localStorage['redux-store'] = JSON.stringify(store.getState())
    }
    );
    return store;
}


