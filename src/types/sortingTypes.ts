export interface SortingState {
  data: string[];
}

export enum SortingActionType {
  VALUE = "VALUE",
}

export interface SortingAction {
  type: SortingActionType;
}