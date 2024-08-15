import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { useMemo } from "react";
import * as SortingDataActionCreators from "../store/actionCreators/sortingAction";

export const useSorting = () => {
  const dispatch = useDispatch();
  const res = useMemo(() => bindActionCreators(SortingDataActionCreators, dispatch), [dispatch]);

  return res;
};
