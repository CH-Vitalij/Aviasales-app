import { Dispatch } from "redux";
import { TicketsAction, TicketsActionType } from "../../types/ticketsDataTypes";
import { TicketsData } from "../../types/aviasalesDataTypes";

import AviasalesService from "../../service/aviasales-service";
import { progressBarActions } from "./progressBarActions";
import { ProgressBarAction } from "../../types/progressBartTypes";

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
  dispatch: Dispatch<TicketsAction | ProgressBarAction>,
) => {
  console.log("successiveRequests");

  while (!result.stop) {
    try {
      result = await obj.getTickets(searchId);
      fullRes.tickets.push(...result.tickets);
      fullRes.stop = result.stop;

      dispatch(progressBarActions());
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

  return async (dispatch: Dispatch<TicketsAction | ProgressBarAction>) => {
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
      dispatch(progressBarActions());
      dispatch(fetchDataSuccess(result));

      if (!result.stop) {
        await successiveRequests(result, fullRes, obj, searchId, dispatch);
      }
    } catch (err) {
      dispatch(fetchDataERROR("Произошла ошибка при загрузке билетов"));
    }
  };
};
