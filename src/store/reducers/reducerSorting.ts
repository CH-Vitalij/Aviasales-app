import { SortingState, SortingActionType, SortingActionTypeObj } from "../../types/sortingTypes";

const initialState: SortingState = {
  data: [],
};

export const reducerSorting = (state = initialState, action: SortingActionTypeObj): SortingState => {
  switch (action.type) {
    case SortingActionType.VALUE:
      return state;

    default:
      return state;
  }
};
