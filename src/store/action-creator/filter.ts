import { FilterActionType } from "../../types/filter";

export const filter = (list: string[]) => {
  return {
    type: FilterActionType.FILTER_CHECKED,
    list,
  };
};
