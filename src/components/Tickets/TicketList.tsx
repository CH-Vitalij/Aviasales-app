import { useContext, useEffect } from "react";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useTickets } from "../../hooks/useTickets";
import { Flex, Spin } from "antd";

import classes from "./TicketList.module.scss";
import Ticket from "../Ticket";
import { CustomContext } from "../App";

const Tickets = () => {
  const { loading, data, error } = useAppSelector((state) => state.ticketsData);
  const { fetchTicketsData } = useTickets();
  const searchId = useContext(CustomContext) as string;

  console.log(searchId);

  useEffect(() => {
    fetchTicketsData(searchId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return (
      <Flex justify="center" flex="0 1 502px">
        <Spin size="large" />
      </Flex>
    );
  }

  if (error) {
    return <h1>Произошла Ошибка</h1>;
  }

  if (!data || !("tickets" in data)) {
    return <h1>Данные не загружены</h1>;
  }

  console.log("Tickets data:", data.tickets);

  const ticketItems = data.tickets.slice(0, 5).map((ticket) => {
    return (
      <li key={ticket.id} className={classes.ticketsTicket}>
        <Ticket {...ticket} stop={data.stop} />
      </li>
    );
  });

  return <ul className={`${classes.aviasalesAppTickets} ${classes.tickets}`}>{ticketItems}</ul>;
};

export default Tickets;
