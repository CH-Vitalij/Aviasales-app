import { combineReducers } from "redux";
import { reducerFilter } from "./reducerFilter";
import { reducerSorting } from "./reducerSorting";
import { reducerTicketsData } from "./reducerTicketsData";
import { reducerSearchId } from "./reducerSearchId";

export const rootReducer = combineReducers({
  ticketsData: reducerTicketsData,
  filter: reducerFilter,
  sortingData: reducerSorting,
  searchId: reducerSearchId,
});

export type RootState = ReturnType<typeof rootReducer>;
