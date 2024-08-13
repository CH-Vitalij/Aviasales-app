import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { useMemo } from "react";
import * as TicketsDataActionCreators from "../store/actionCreators/ticketsActions";

export const useTickets = () => {
  const dispatch = useDispatch();
  const res = useMemo(() => bindActionCreators(TicketsDataActionCreators, dispatch), [dispatch]);
  console.log(res);

  return res;
};
