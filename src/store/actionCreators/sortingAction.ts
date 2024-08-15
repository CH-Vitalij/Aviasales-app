import { SortingActionType } from "../../types/sortingTypes";

export const sortingAction = (sortingBy: string, id: string) => ({
  type: SortingActionType.SORTING,
  payload: { sortingBy, id },
});
