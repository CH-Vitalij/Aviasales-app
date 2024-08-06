import { FilterState, ActionType, FilterActionType } from "../../types/filter";

const initialState: FilterState = {
  filters: [
    { text: "Все", checked: false, id: crypto.randomUUID() },
    { text: "Без пересадок", checked: false, id: crypto.randomUUID() },
    { text: "1 пересадка", checked: false, id: crypto.randomUUID() },
    { text: "2 пересадки", checked: false, id: crypto.randomUUID() },
    { text: "3 пересадки", checked: false, id: crypto.randomUUID() },
  ],
};

export const reducerFilter = (state = initialState, action: ActionType): FilterState => {
  switch (action.type) {
    case FilterActionType.FILTER_CHECKED: {
      const { filters } = state;
      const filterInd = filters.findIndex((filter) => filter.id === action.id);

      if (filterInd === -1) {
        return state;
      }

      const newCheckedState = !filters[filterInd].checked;
      const newFilters = filters.map((filter, index) => {
        if (filterInd === 0) {
          return { ...filter, checked: newCheckedState };
        } else if (index === filterInd) {
          return { ...filter, checked: newCheckedState };
        } else if (index === 0) {
          return { ...filter, checked: false };
        }
        return filter;
      });

      if (filterInd !== 0 && newFilters.slice(1).every((filter) => filter.checked)) {
        newFilters[0].checked = true;
      }

      return { filters: newFilters };
    }

    default:
      return state;
  }
};
