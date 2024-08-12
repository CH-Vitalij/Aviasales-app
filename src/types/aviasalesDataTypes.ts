export interface SearchRequest {
  searchId: string;
}

interface Segment {
  origin: string;
  destination: string;
  date: string;
  stops: string[];
  duration: number;
}

export interface Ticket {
  id: string;
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
