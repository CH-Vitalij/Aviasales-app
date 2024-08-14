import { Ticket } from "../../types/aviasalesDataTypes";

const sortingTickets = (tickets: Ticket[], sorting: string) => {
  const ticketsClone = structuredClone(tickets);

  switch (sorting) {
    case "price": {
      return ticketsClone.sort((ticket1, ticket2) => ticket1.price - ticket2.price);
    }
    case "duration": {
      return ticketsClone.sort(
        (ticket1, ticket2) =>
          ticket1.segments.reduce((sum, el) => (sum += el.duration), 0) -
          ticket2.segments.reduce((sum, el) => (sum += el.duration), 0),
      );
    }

    default:
      return ticketsClone;
  }
};

export default sortingTickets;
