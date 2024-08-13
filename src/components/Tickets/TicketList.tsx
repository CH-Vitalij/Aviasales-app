import { useCallback, useEffect } from "react";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useTickets } from "../../hooks/useTickets";
import { Flex, Spin } from "antd";

import classes from "./TicketList.module.scss";
import Ticket from "../Ticket";

const Tickets = () => {
  const { data, error, loading } = useAppSelector((state) => state.ticketsData);
  const { checkedFilters } = useAppSelector((state) => state.filter);
  const { searchId } = useAppSelector((state) => state.searchId);

  const { fetchTicketsData } = useTickets();

  const fetchTickets = useCallback(
    (searchId: string) => fetchTicketsData(searchId),
    [fetchTicketsData],
  );

  useEffect(() => {
    if (checkedFilters.length === 4) {
      fetchTickets(searchId);
    }
  }, [fetchTickets, searchId, checkedFilters]);

  console.log(checkedFilters);

  if (loading) {
    return (
      <Flex justify="center" flex="0 1 502px">
        <Spin size="large" />
      </Flex>
    );
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  if (!data || !("tickets" in data)) {
    return <h1>Данные не загружены</h1>;
  }

  if (checkedFilters.length === 0 || data.tickets.length === 0) {
    return <h1>Рейсов, подходящих под заданные фильтры, не найдено</h1>;
  }

  // const hasData = !(loading || error);

  console.log("Tickets data:", data.tickets);

  const ticketItems = data.tickets.slice(0, 5).map((ticket) => {
    return (
      <li key={ticket.id} className={classes.ticketsTicket}>
        <Ticket {...ticket} />
      </li>
    );
  });

  return <ul className={`${classes.aviasalesAppTickets} ${classes.tickets}`}>{ticketItems}</ul>;
};

export default Tickets;
