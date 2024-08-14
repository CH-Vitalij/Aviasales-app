import { useCallback, useEffect, useRef } from "react";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useTickets } from "../../hooks/useTickets";
import { Flex, Spin } from "antd";

import classes from "./TicketList.module.scss";
import TicketItem from "../TicketItem";
import filterTicketsByStops from "../../features/filterTicketsByStops/filterTicketsByStops";
import sortingTickets from "../../features/sortingTickets/sortingTickets";

const TicketsList = () => {
  const { data, error, loading } = useAppSelector((state) => state.ticketsData);
  const { checkedFilters } = useAppSelector((state) => state.filter);
  const { searchId } = useAppSelector((state) => state.searchId);
  const { sortingBy } = useAppSelector((state) => state.sortingData);

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

  if (loading) {
    return (
      <Flex justify="center" flex="0 1 502px">
        <Spin size="large" />
      </Flex>
    );
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  if (!data || !("tickets" in data)) {
    return <h2>Данные не загружены</h2>;
  }

  if (checkedFilters.length === 0 || data.tickets.length === 0) {
    return <h2>Рейсов, подходящих под заданные фильтры, не найдено</h2>;
  } else {
    let filterData = filterTicketsByStops(data.tickets, checkedFilters);

    if (sortingBy) {
      console.log("sortingBy", sortingBy);

      filterData = sortingTickets(filterData, sortingBy);
    }

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
  }
};

export default TicketsList;
