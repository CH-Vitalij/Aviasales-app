export interface SearchRequest {
  searchId: string;
}

export interface Segment {
  origin: string;
  destination: string;
  date: string;
  stops: string[];
  duration: number;
}

interface Ticket {
  price: number;
  carrier: string;
  segments: Segment[];
}

export interface TicketsData {
  tickets: Ticket[];
  stop: boolean;
}

export interface TicketDataProps extends Ticket {
  stop: boolean;
}
