import { Ticket } from "../../types/aviasalesDataTypes";

const sortingTickets = (tickets: Ticket[], sorting: string) => {
  if (sorting === "price") {
    return tickets.sort((ticket1, ticket2) => ticket1.price - ticket2.price);
  }

  if (sorting === "duration") {
    return tickets.sort(
      (ticket1, ticket2) =>
        ticket1.segments.reduce((sum, el) => (sum += el.duration), 0) -
        ticket2.segments.reduce((sum, el) => (sum += el.duration), 0),
    );
  }

  return tickets;
};

export default sortingTickets;
