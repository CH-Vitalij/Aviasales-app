import { FilterActionType } from "../../types/filterTypes";

export const filterAction = (list: string[]) => {
  return {
    type: FilterActionType.FILTER_CHECKED,
    list,
  };
};
