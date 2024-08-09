import { TicketsData } from "./aviasalesDataTypes";

export interface TicketsState {
  loading: boolean;
  data: TicketsData;
  error: null | string;
}

export enum TicketsActionType {
  FETCH_TICKETS_REQUEST = "TICKETS_REQUEST",
  FETCH_TICKETS_SUCCESS = "FETCH_TICKETS_SUCCESS",
  FETCH_TICKETS_ERROR = "FETCH_TICKETS_ERROR",
}

interface TicketsRequestAction {
  type: TicketsActionType.FETCH_TICKETS_REQUEST;
}

interface TicketsSuccessAction {
  type: TicketsActionType.FETCH_TICKETS_SUCCESS;
  payload: TicketsData;
}

interface TicketsErrorAction {
  type: TicketsActionType.FETCH_TICKETS_ERROR;
  payload: string;
}

export type TicketsAction = TicketsRequestAction | TicketsSuccessAction | TicketsErrorAction;
