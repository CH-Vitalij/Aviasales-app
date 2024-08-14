import { useCallback, useEffect, useRef } from "react";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useTickets } from "../../hooks/useTickets";
import { Flex, Spin } from "antd";

import classes from "./TicketList.module.scss";
import TicketItem from "../TicketItem";
import { Ticket } from "../../types/aviasalesDataTypes";

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

  const filterData = filterTicketsByStops(data.tickets, checkedFilters);

  console.log("filterData", filterData);

  const ticketItems = filterData.slice(0, 5).map((ticket) => {
    return (
      <li key={ticket.id} className={classes.ticketsTicket}>
        <TicketItem {...ticket} />
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

const filterTicketsByStops = (tickets: Ticket[], filters: string[]) => {
  if (filters.length === 4) {
    return tickets;
  }

  const stopsNumber = parseStops(filters);
  return tickets.filter((ticket) =>
    ticket.segments.some((segment) => stopsNumber.includes(segment.stops.length)),
  );
};

const parseStops = (arr: string[]) => {
  return arr.map((item) => {
    if (item === "Без пересадок") {
      return 0;
    } else if (item.includes("пересадка")) {
      return parseInt(item.split(" ")[0], 10);
    } else if (item.includes("пересадки")) {
      return parseInt(item.split(" ")[0], 10);
    }
  });
};

export default TicketsList;
