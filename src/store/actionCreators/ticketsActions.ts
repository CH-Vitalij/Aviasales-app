import { Dispatch } from "redux";
import { TicketsAction, TicketsActionType } from "../../types/ticketsDataTypes";
import { TicketsData } from "../../types/aviasalesDataTypes";

import AviasalesService from "../../service/aviasales-service";

const fetchDataSuccess = (data: TicketsData): TicketsAction => ({
  type: TicketsActionType.FETCH_TICKETS_SUCCESS,
  payload: data,
});

const fetchDataERROR = (error: string): TicketsAction => ({
  type: TicketsActionType.FETCH_TICKETS_ERROR,
  payload: error,
});

const successiveRequests = async (
  result: TicketsData,
  fullRes: TicketsData,
  obj: AviasalesService,
  searchId: string,
  dispatch: Dispatch<TicketsAction>,
) => {
  console.log("successiveRequests");

  // let totalTickets = 500;
  // let currentTotalTickets = 0;

  while (!result.stop) {
    try {
      result = await obj.getTickets(searchId);
      fullRes.tickets.push(...result.tickets);
      fullRes.stop = result.stop;

      // currentTotalTickets = result.tickets.length;
      // console.log("currentTotalTickets", currentTotalTickets);
      // totalTickets += result.tickets.length;
      // console.log("totalTickets", totalTickets);

      // const progress = Math.round((totalTickets / (totalTickets + currentTotalTickets)) * 100);
      // console.log(`progress ${progress}%`);
    } catch (err) {
      if (err instanceof Error) {
        if (err.message === "500") {
          continue;
        } else {
          throw err;
        }
      }
    }
  }

  console.log(fullRes);

  dispatch(fetchDataSuccess(fullRes));
};

export const fetchTicketsData = (searchId: string) => {
  const obj = new AviasalesService();

  const fullRes: TicketsData = { tickets: [], stop: false };
  let result: TicketsData = { tickets: [], stop: false };

  return async (dispatch: Dispatch<TicketsAction>) => {
    try {
      try {
        result = await obj.getTickets(searchId);

        fullRes.tickets.push(...result.tickets);
      } catch (err) {
        if (err instanceof Error) {
          if (err.message === "500") {
            result = await obj.getTickets(searchId);
            fullRes.tickets.push(...result.tickets);
          } else {
            throw err;
          }
        }
      }

      console.log(result);
      dispatch(fetchDataSuccess(result));

      // if (!result.stop) {
      //   await successiveRequests(result, fullRes, obj, searchId, dispatch);
      // }
    } catch (err) {
      dispatch(fetchDataERROR("Произошла ошибка при загрузке билетов"));
    }
  };
};
