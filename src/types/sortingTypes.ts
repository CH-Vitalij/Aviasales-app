export interface SortingStateType {
  sortingBy: string;
  active: boolean;
  id: string;
}

export interface SortingState {
  dataSorting: SortingStateType[];
}

export enum SortingActionType {
  SORTING = "SORTING",
}

export interface SortingAction {
  type: SortingActionType;
  payload: { sortingBy: string; id: string };
}
