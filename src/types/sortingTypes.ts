export interface SortingState {
  data: string[];
}

export enum SortingActionType {
  VALUE = "VALUE",
}

export interface SortingActionTypeObj {
  type: SortingActionType;
}