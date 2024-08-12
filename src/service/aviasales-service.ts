import { SearchRequest, TicketsData, Ticket } from "../types/aviasalesDataTypes";

export default class AviasalesService {
  async getSearchId() {
    const response = await fetch("https://aviasales-test-api.kata.academy/search");

    if (!response.ok) {
      throw new Error(`Could not fetch, received ${response.status}`);
    }

    const result = (await response.json()) as SearchRequest;

    return result.searchId;
  }

  async getTickets(searchId: string) {
    const response = await fetch(
      `https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`,
    );

    if (!response.ok) {
      if (response.status === 500) {
        throw new Error(`${response.status}`);
      }
      throw new Error(`Could not fetch, received ${response.status}`);
    }

    const result = (await response.json()) as TicketsData;

    result.tickets = this.transformDataAddId(result.tickets);

    return result;
  }

  transformDataAddId = (data: Ticket[]) => {
    const newData = JSON.parse(JSON.stringify(data)) as Ticket[];

    newData.forEach((ticket: Ticket) => (ticket.id = crypto.randomUUID()));

    return newData;
  };
}
