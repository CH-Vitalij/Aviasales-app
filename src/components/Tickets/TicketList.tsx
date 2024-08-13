import { useCallback, useEffect, useRef } from "react";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useTickets } from "../../hooks/useTickets";
import { Flex, Spin } from "antd";

import classes from "./TicketList.module.scss";
import Ticket from "../Ticket";

const TicketsList = () => {
  const { data, error, loading } = useAppSelector((state) => state.ticketsData);
  const { checkedFilters } = useAppSelector((state) => state.filter);
  const { searchId } = useAppSelector((state) => state.searchId);

  const { fetchTicketsData } = useTickets();

  const fetchTickets = useCallback(
    (searchId: string) => fetchTicketsData(searchId),
    [fetchTicketsData],
  );

  const isLoading = useRef(false);

  useEffect(() => {
    console.log("Effect");

    if (!isLoading.current && searchId) {
      isLoading.current = true;
      fetchTickets(searchId);
    }
  }, [fetchTickets, searchId]);

  console.log("checkedFilters", checkedFilters);

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

  return (
    <>
      {!data.stop ? <h1>Ищем билеты...</h1> : null}
      <ul className={`${classes.aviasalesAppTickets} ${classes.tickets}`}>{ticketItems}</ul>
    </>
  );
};

export default TicketsList;
