import { Reducer, combineReducers, applyMiddleware, createStore } from "redux";
import { postsReducer } from "./posts/reducer";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { StoreState } from "./store.types";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers<Reducer>({
  posts: postsReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export const useTypedSelector: TypedUseSelectorHook<StoreState> = useSelector;

export { store };
