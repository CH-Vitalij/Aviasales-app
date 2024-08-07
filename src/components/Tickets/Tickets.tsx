import classes from "./Tickets.module.scss";

const Tickets = () => {
  return (
    <ul className={`${classes.aviasalesAppTickets} ${classes.tickets}`}>
      <li className={classes.ticketsTicket}>
        <header className={classes.ticketsTicketHeader}>
          <span className={classes.ticketsTicketHeaderPrice}>13 400 Р</span>
          <div className={classes.ticketsTicketHeaderArlineLogo}>
            <img src="./src/img/S7 Logo.svg" alt="arline-logo" />
          </div>
        </header>
        <div className={classes.ticketsTicketRouteInfo}>
          <div className={classes.ticketsTicketRoute}>
            <span className="">MOW – HKT</span>
            <span>11:20 – 00:50</span>
          </div>
          <div className={classes.ticketsTicketDuration}>В пути 13ч 30м</div>
          <div className={classes.ticketsTicketStops}>1 пересадка HKG</div>
        </div>
      </li>
    </ul>
  );
};

export default Tickets;
