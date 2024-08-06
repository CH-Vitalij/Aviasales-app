import { FilterActionType } from "../../types/filter";

export const filter = (id: string) => {
  return {
    type: FilterActionType.FILTER_CHECKED,
    id,
  };
};
