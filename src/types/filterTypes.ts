export interface FilterState {
  checkedFilters: string[];
}

export enum FilterActionType {
  FILTER_CHECKED = "FILTER_CHECKED",
}

export interface FilterActionTypeObj {
  type: FilterActionType;
  list: string[];
}
