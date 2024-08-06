import { FilterState, ActionType, FilterType } from "../../types/filter";

const initialState = {
  checked: false,
};

export const reducerFilter = (state = initialState, action: ActionType): FilterState => {
  switch (action.type) {
    case FilterType.FILTER_CHECKED:
      return { checked: true };

    default:
      return state;
  }
};
