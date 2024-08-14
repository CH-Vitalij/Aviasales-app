import { TicketsState, TicketsAction, TicketsActionType } from "../../types/ticketsDataTypes";

const initialState: TicketsState = {
  loading: false,
  data: { tickets: [], stop: false },
  error: null,
};

export const reducerTicketsData = (state = initialState, action: TicketsAction) => {
  switch (action.type) {
    case TicketsActionType.FETCH_TICKETS_REQUEST: {
      return {
        loading: true,
        data: {},
        error: null,
      };
    }
    case TicketsActionType.FETCH_TICKETS_SUCCESS: {
      return {
        loading: false,
        data: action.payload,
        error: null,
      };
    }
    case TicketsActionType.FETCH_TICKETS_ERROR: {
      return {
        loading: false,
        data: [],
        error: action.payload,
      };
    }

    default:
      return state;
  }
};
