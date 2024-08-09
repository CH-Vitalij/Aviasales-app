import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as TicketsDataActionCreators from "../store/actionCreators/ticketsActions";

export const useTickets = () => {
  const dispatch = useDispatch();
  return bindActionCreators(TicketsDataActionCreators, dispatch);
};