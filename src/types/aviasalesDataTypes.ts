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

interface Ticket {
  price: number;
  carrier: string;
  segments: Segment[];
}

export interface TicketsData {
  tickets: Ticket[];
  stop: boolean;
}
