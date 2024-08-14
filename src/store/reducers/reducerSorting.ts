import { SortingState, SortingActionType, SortingAction } from "../../types/sortingTypes";

const initialState: SortingState = {
  sortingBy: "",
};

export const reducerSorting = (state = initialState, action: SortingAction): SortingState => {
  switch (action.type) {
    case SortingActionType.SORTING_PRICE:
      return { sortingBy: action.payload };
    case SortingActionType.SORTING_DURATION:
      return { sortingBy: action.payload };

    default:
      return state;
  }
};
