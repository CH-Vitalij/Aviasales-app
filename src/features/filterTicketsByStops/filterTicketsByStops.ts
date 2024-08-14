import { Ticket } from "../../types/aviasalesDataTypes";
import parseStops from "../parseStops/parseStops";

const filterTicketsByStops = (tickets: Ticket[], filters: string[]) => {
  if (filters.length === 4) {
    return tickets;
  }

  const stopsNumber = parseStops(filters);
  return tickets.filter((ticket) =>
    ticket.segments.some((segment) => stopsNumber.includes(segment.stops.length)),
  );
};

export default filterTicketsByStops;
