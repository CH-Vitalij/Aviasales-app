import { FilterState, FilterAction, FilterActionType } from "../../types/filterTypes";

const initialState: FilterState = {
  checkedFilters: [],
};

export const reducerFilter = (state = initialState, action: FilterAction): FilterState => {
  switch (action.type) {
    case FilterActionType.FILTER_CHECKED: {
      return { checkedFilters: action.list };
    }

    default:
      return state;
  }
};
