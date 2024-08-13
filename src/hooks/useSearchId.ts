import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { useMemo } from "react";
import * as SearchIdDataActionCreators from "../store/actionCreators/searchIdAction";

export const useSearchId = () => {
  const dispatch = useDispatch();

  const res = useMemo(() => bindActionCreators(SearchIdDataActionCreators, dispatch), [dispatch]);
  console.log(res);

  return res;
};
