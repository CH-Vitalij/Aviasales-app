import { TicketsState, TicketsAction, TicketsActionType } from "../../types/ticketsDataTypes";

const initialState: TicketsState = {
  data: { tickets: [], stop: false },
  error: null,
};

export const reducerTicketsData = (state = initialState, action: TicketsAction) => {
  switch (action.type) {
    case TicketsActionType.FETCH_TICKETS_SUCCESS: {
      return {
        data: {
          tickets: [...state.data.tickets, ...action.payload.tickets],
          stop: action.payload.stop,
        },
        error: null,
      };
    }
    case TicketsActionType.FETCH_TICKETS_ERROR: {
      return {
        data: { tickets: [], stop: true },
        error: action.payload,
      };
    }

    default:
      return state;
  }
};
