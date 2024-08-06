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
  console.log("action", action);

  switch (action.type) {
    case FilterActionType.FILTER_CHECKED: {
      const { filters } = state;

      return {
        filters: filters.map((filter) =>
          filter.id === action.id ? { ...filter, checked: !filter.checked } : filter,
        ),
      };
    }

    default:
      return state;
  }
};
