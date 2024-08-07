import { FilterState, ActionType, FilterActionType } from "../../types/filter";

const initialState: FilterState = {
  checkedFilters: [],
};

export const reducerFilter = (state = initialState, action: ActionType): FilterState => {
  switch (action.type) {
    case FilterActionType.FILTER_CHECKED: {
      return { checkedFilters: action.list };
    }

    default:
      return state;
  }
};
