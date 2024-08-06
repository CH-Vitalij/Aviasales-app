interface Filter {
  text: string;
  checked: boolean;
  id: string;
}

export interface FilterState {
  filters: Filter[];
}

export enum FilterActionType {
  FILTER_CHECKED = "FILTER_CHECKED",
}

export interface ActionType {
  type: FilterActionType;
  id: string;
}

export interface FilterPropTypes {
  text: string;
  id: string;
  checked: boolean;
}
