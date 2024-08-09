import { SearchRequest, TicketsData } from "../types/aviasalesDataTypes";

export default class AviasalesService {
  async getSearchId() {
    const response = await fetch("https://aviasales-test-api.kata.academy/search");

    if (!response.ok) {
      throw new Error(`Could not fetch, received ${response.status}`);
    }

    const result = (await response.json()) as SearchRequest;
    return result.searchId;
  }

  async getTickets() {
    const searchId = await this.getSearchId();

    const response = await fetch(
      `https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`,
    );

    if (!response.ok) {
      throw new Error(`Could not fetch, received ${response.status}`);
    }

    const result = (await response.json()) as TicketsData;
    return result;
  }
}
