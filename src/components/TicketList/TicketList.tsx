import { useCallback, useEffect, useMemo, useRef } from "react";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useTickets } from "../../hooks/useTickets";
import { Progress } from "antd";

import classes from "./TicketList.module.scss";
import TicketItem from "../TicketItem";
import filterTicketsByStops from "../../features/filterTicketsByStops/filterTicketsByStops";
import sortingTickets from "../../features/sortingTickets/sortingTickets";

const TicketsList = () => {
  const { data, error } = useAppSelector((state) => state.ticketsData);
  const { checkedFilters } = useAppSelector((state) => state.filter);
  const { searchId } = useAppSelector((state) => state.searchId);
  const { sortingBy } = useAppSelector((state) => state.sortingData);
  const { progress } = useAppSelector((state) => state.progressBar);

  const { fetchTicketsData } = useTickets();

  const fetchTickets = useCallback(
    (searchId: string) => fetchTicketsData(searchId),
    [fetchTicketsData],
  );

  const isLoading = useRef(false);

  useEffect(() => {
    if (!isLoading.current && searchId) {
      isLoading.current = true;
      fetchTickets(searchId);
    }
  }, [fetchTickets, searchId]);

  let filterData = useMemo(() => {
    if (!data || !("tickets" in data) || checkedFilters.length === 0) {
      return [];
    }

    return filterTicketsByStops(data.tickets, checkedFilters);
  }, [data, checkedFilters]);

  if (error) {
    return <h2>{error}</h2>;
  }

  if (checkedFilters.length === 0 || filterData.length === 0) {
    return <h2>Рейсов, подходящих под заданные фильтры, не найдено</h2>;
  }

  if (sortingBy) {
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
      {data && "stop" in data && !data.stop ? (
        <div className={`${classes.aviasalesAppProgressBar}`}>
          Ищем авиабилеты
          <Progress percent={progress} size="small" />
        </div>
      ) : null}
      <ul className={`${classes.aviasalesAppTickets} ${classes.tickets}`}>{ticketItems}</ul>
    </>
  );
};

export default TicketsList;
