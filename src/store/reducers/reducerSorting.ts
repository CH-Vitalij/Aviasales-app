import { SortingState, SortingActionType, SortingAction } from "../../types/sortingTypes";

const initialState: SortingState = {
  data: [],
};

export const reducerSorting = (state = initialState, action: SortingAction): SortingState => {
  switch (action.type) {
    case SortingActionType.VALUE:
      return state;

    default:
      return state;
  }
};
