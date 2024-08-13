import { Dispatch } from "redux";
import { TicketsAction, TicketsActionType } from "../../types/ticketsDataTypes";
import { TicketsData } from "../../types/aviasalesDataTypes";

import AviasalesService from "../../service/aviasales-service";

const fetchDataRequest = (): TicketsAction => ({
  type: TicketsActionType.FETCH_TICKETS_REQUEST,
});

const fetchDataSuccess = (data: TicketsData): TicketsAction => ({
  type: TicketsActionType.FETCH_TICKETS_SUCCESS,
  payload: data,
});

const fetchDataERROR = (error: string): TicketsAction => ({
  type: TicketsActionType.FETCH_TICKETS_ERROR,
  payload: error,
});

const successiveRequests = async (result, fullRes, obj, searchId, dispatch) => {
  console.log("successiveRequests");

  while (!result.stop) {
    try {
      result = await obj.getTickets(searchId);
      fullRes.tickets.push(...result.tickets);
    } catch (err) {
      console.log(err);
      if (err.message === "500") {
        console.log("Ошибка 500");
        continue;
      } else {
        throw err;
      }
    }

    console.log(fullRes);
  }

  dispatch(fetchDataSuccess(fullRes));
};

export const fetchTicketsData = (searchId) => {
  const obj = new AviasalesService();

  const fullRes = { tickets: [], stop: false };
  let result = null;

  return async function handleData(dispatch: Dispatch<TicketsAction>) {
    try {
      dispatch(fetchDataRequest());

      try {
        result = await obj.getTickets(searchId);
        fullRes.tickets.push(...result.tickets);
      } catch (err) {
        console.log(err);
        if (err.message === "500") {
          console.log("Ошибка 500");
          result = await obj.getTickets(searchId);
          fullRes.tickets.push(...result.tickets);
        } else {
          throw err;
        }
      }

      console.log(result);

      dispatch(fetchDataSuccess(result));

      await successiveRequests(result, fullRes, obj, searchId, dispatch);
    } catch (err) {
      console.log(err);
      dispatch(fetchDataERROR("Произошла ошибка при загрузке билетов"));
    }
  };
};
