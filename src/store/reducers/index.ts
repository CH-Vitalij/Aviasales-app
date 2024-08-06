import { combineReducers } from "redux";
import { reducerFilter } from "./reducerFilter";

export const rootReducer = combineReducers({
  filter: reducerFilter,
});

export type RootState = ReturnType<typeof rootReducer>;
