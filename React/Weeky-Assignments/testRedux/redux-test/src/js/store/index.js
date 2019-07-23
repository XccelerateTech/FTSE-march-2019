import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "../reducers/index";
import { forbiddenWordsMiddleware } from "../middleware";

const storeEnchancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
storeEnchancers(applyMiddleware(forbiddenWordsMiddleware))
    );

export default store;