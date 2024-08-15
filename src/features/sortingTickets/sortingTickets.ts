import { Ticket } from "../../types/aviasalesDataTypes";
import { SortingStateType } from "../../types/sortingTypes";

const sortingTickets = (tickets: Ticket[], sorting: SortingStateType) => {
  const ticketsClone = structuredClone(tickets);

  switch (sorting.sortingBy) {
    case "САМЫЙ ДЕШЁВЫЙ": {
      ticketsClone.sort((ticket1, ticket2) => ticket1.price - ticket2.price);
      break;
    }
    case "САМЫЙ БЫСТРЫЙ": {
      ticketsClone.sort(
        (ticket1, ticket2) =>
          ticket1.segments.reduce((sum, el) => (sum += el.duration), 0) -
          ticket2.segments.reduce((sum, el) => (sum += el.duration), 0),
      );
      break;
    }
    default:
      break;
  }

  return ticketsClone;
};

export default sortingTickets;
