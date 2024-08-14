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

  const filterData = handleFilter(data.tickets, checkedFilters) as Ticket[];

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

const handleFilter = (tickets: Ticket[], filters: string[]) => {
  let res;

  switch (filters.length) {
    case 1: {
      filters.forEach((filter) => {
        switch (filter) {
          case "Без пересадок":
            res = tickets.filter((ticket) => {
              if (ticket.segments.some((el) => el.stops.length === 0)) {
                return ticket;
              }
            });
            break;
          case "1 пересадка":
            res = tickets.filter((ticket) => {
              if (ticket.segments.some((el) => el.stops.length === 1)) {
                return ticket;
              }
            });
            break;
          case "2 пересадки":
            res = tickets.filter((ticket) => {
              if (ticket.segments.some((el) => el.stops.length === 2)) {
                return ticket;
              }
            });
            break;
          case "3 пересадки":
            res = tickets.filter((ticket) => {
              if (ticket.segments.some((el) => el.stops.length === 3)) {
                return ticket;
              }
            });
            break;

          default:
            break;
        }
      });

      return res;
    }
    case 2:
      {
        if (filters[0] === "Без пересадок" && filters[1] === "1 пересадка") {
          return tickets.filter((ticket) => {
            if (ticket.segments.some((el) => el.stops.length === 0 || el.stops.length === 1)) {
              return ticket;
            }
          });
        }
        if (filters[0] === "Без пересадок" && filters[1] === "2 пересадки") {
          return tickets.filter((ticket) => {
            if (ticket.segments.some((el) => el.stops.length === 0 || el.stops.length === 2)) {
              return ticket;
            }
          });
        }
        if (filters[0] === "Без пересадок" && filters[1] === "3 пересадки") {
          return tickets.filter((ticket) => {
            if (ticket.segments.some((el) => el.stops.length === 0 || el.stops.length === 3)) {
              return ticket;
            }
          });
        }
        if (filters[0] === "1 пересадка" && filters[1] === "2 пересадки") {
          return tickets.filter((ticket) => {
            if (ticket.segments.some((el) => el.stops.length === 1 || el.stops.length === 2)) {
              return ticket;
            }
          });
        }
        if (filters[0] === "1 пересадка" && filters[1] === "3 пересадки") {
          return tickets.filter((ticket) => {
            if (ticket.segments.some((el) => el.stops.length === 1 || el.stops.length === 3)) {
              return ticket;
            }
          });
        }
        if (filters[0] === "2 пересадки" && filters[1] === "3 пересадки") {
          return tickets.filter((ticket) => {
            if (ticket.segments.some((el) => el.stops.length === 2 || el.stops.length === 3)) {
              return ticket;
            }
          });
        }
      }
      break;
    case 3:
      {
        if (
          filters[0] === "Без пересадок" &&
          filters[1] === "1 пересадка" &&
          filters[2] === "2 пересадки"
        ) {
          return tickets.filter((ticket) => {
            if (
              ticket.segments.some(
                (el) => el.stops.length === 0 || el.stops.length === 1 || el.stops.length === 2,
              )
            ) {
              return ticket;
            }
          });
        }
        if (
          filters[0] === "Без пересадок" &&
          filters[1] === "1 пересадка" &&
          filters[2] === "3 пересадки"
        ) {
          return tickets.filter((ticket) => {
            if (
              ticket.segments.some(
                (el) => el.stops.length === 0 || el.stops.length === 1 || el.stops.length === 3,
              )
            ) {
              return ticket;
            }
          });
        }
        if (
          filters[0] === "Без пересадок" &&
          filters[1] === "2 пересадки" &&
          filters[2] === "3 пересадки"
        ) {
          return tickets.filter((ticket) => {
            if (
              ticket.segments.some(
                (el) => el.stops.length === 0 || el.stops.length === 2 || el.stops.length === 3,
              )
            ) {
              return ticket;
            }
          });
        }
        if (
          filters[0] === "1 пересадка" &&
          filters[1] === "2 пересадки" &&
          filters[2] === "3 пересадки"
        ) {
          return tickets.filter((ticket) => {
            if (
              ticket.segments.some(
                (el) => el.stops.length === 1 || el.stops.length === 2 || el.stops.length === 3,
              )
            ) {
              return ticket;
            }
          });
        }
      }
      break;
    case 4:
      return tickets;

    default:
      return tickets;
  }
};

export default TicketsList;
