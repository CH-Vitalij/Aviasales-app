import { combineReducers } from "redux";
import { reducerFilter } from "./reducerFilter";
import { reducerSorting } from "./reducerSorting";

export const rootReducer = combineReducers({
  filter: reducerFilter,
  data: reducerSorting,
});

export type RootState = ReturnType<typeof rootReducer>;
