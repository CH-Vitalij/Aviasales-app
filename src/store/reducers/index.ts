import { combineReducers } from "redux";
import { reducerFilter } from "./reducerFilter";
import { reducerSorting } from "./reducerSorting";
import { reducerTicketsData } from "./reducerTicketsData";

export const rootReducer = combineReducers({
  ticketsData: reducerTicketsData,
  filter: reducerFilter,
  data: reducerSorting,
});

export type RootState = ReturnType<typeof rootReducer>;
