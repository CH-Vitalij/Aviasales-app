import { SortingState, SortingActionType, SortingAction } from "../../types/sortingTypes";

const initialState: SortingState = {
  dataSorting: [
    { sortingBy: "САМЫЙ ДЕШЁВЫЙ", active: false, id: crypto.randomUUID() },
    { sortingBy: "САМЫЙ БЫСТРЫЙ", active: false, id: crypto.randomUUID() },
    { sortingBy: "ОПТИМАЛЬНЫЙ", active: false, id: crypto.randomUUID() },
  ],
};

export const reducerSorting = (state = initialState, action: SortingAction): SortingState => {
  switch (action.type) {
    case SortingActionType.SORTING: {
      const { dataSorting } = state;

      return {
        dataSorting: dataSorting.map((el) =>
          action.payload.id === el.id ? { ...el, active: !el.active } : { ...el, active: false },
        ),
      };
    }

    default:
      return state;
  }
};
