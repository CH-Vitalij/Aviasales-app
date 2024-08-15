import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { useMemo } from "react";
import * as FilterDataActionCreators from "../store/actionCreators/filterAction";

export const useFilter = () => {
  const dispatch = useDispatch();
  const res = useMemo(() => bindActionCreators(FilterDataActionCreators, dispatch), [dispatch]);

  return res;
};
