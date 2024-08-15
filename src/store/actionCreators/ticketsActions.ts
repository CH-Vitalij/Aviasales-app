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
  obj: AviasalesService,
  searchId: string,
  dispatch: Dispatch<TicketsAction | ProgressBarAction>,
) => {
  const fullRes: TicketsData = { tickets: [], stop: false };

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

  dispatch(fetchDataSuccess(fullRes));
};

export const fetchTicketsData = (searchId: string) => {
  const obj = new AviasalesService();

  let result: TicketsData = { tickets: [], stop: false };

  return async (dispatch: Dispatch<TicketsAction | ProgressBarAction>) => {
    try {
      // eslint-disable-next-line no-constant-condition
      while (true) {
        try {
          result = await obj.getTickets(searchId);
          break;
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

      dispatch(progressBarActions());
      dispatch(fetchDataSuccess(result));

      if (!result.stop) {
        await successiveRequests(result, obj, searchId, dispatch);
      }
    } catch (err) {
      dispatch(fetchDataERROR("Произошла ошибка при загрузке билетов"));
    }
  };
};
