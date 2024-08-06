export interface FilterState {
  checked: boolean;
}

export enum FilterType {
  FILTER_CHECKED = "FILTER_CHECKED",
}

export interface ActionType {
  type: FilterType;
}
