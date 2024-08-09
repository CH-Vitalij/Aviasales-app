export interface FilterState {
  checkedFilters: string[];
}

export enum FilterActionType {
  FILTER_CHECKED = "FILTER_CHECKED",
}

export interface FilterAction {
  type: FilterActionType;
  list: string[];
}
