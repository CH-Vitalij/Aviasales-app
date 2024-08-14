export interface SortingState {
  sortingBy: string;
}

export enum SortingActionType {
  SORTING_PRICE = "SORTING_PRICE",
  SORTING_DURATION = "SORTING_DURATION",
}

interface SortingPriceAction {
  type: SortingActionType;
  payload: string;
}

interface SortingDurationAction {
  type: SortingActionType;
  payload: string;
}

export type SortingAction = SortingPriceAction | SortingDurationAction;
