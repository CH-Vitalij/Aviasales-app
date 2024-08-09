import classes from "./Ticket.module.scss";

import { TicketDataProps } from "../../types/aviasalesDataTypes";

const Ticket = (props: TicketDataProps) => {
  console.log(props);

  return (
    <>
      <header className={classes.ticketsTicketHeader}>
        <span className={classes.ticketsTicketHeaderPrice}>{props.price} Р</span>
        <div className={classes.ticketsTicketHeaderArlineLogo}>
          <img src={`http://pics.avs.io/110/36/${props.carrier}.png.`} alt="arline-logo" />
        </div>
      </header>
      <div className={classes.ticketsTicketSegmentsInfo}>
        <div className={classes.ticketsTicketRoute}>
          <span
            className={classes.ticketsTicketRouteItem1}
          >{`${props.segments[0].origin} - ${props.segments[0].destination}`}</span>
          <span className={classes.ticketsTicketRouteItem2}>11:20 – 00:50</span>
        </div>
        <div className={classes.ticketsTicketDuration}>
          <span className={classes.ticketsTicketDurationItem1}>В ПУТИ</span>
          <span className={classes.ticketsTicketDurationItem2}>13ч 30м</span>
        </div>
        <div className={classes.ticketsTicketStops}>
          <span
            className={classes.ticketsTicketStopsItem1}
          >{`${props.segments[0].stops.length} ПЕРЕСАДКА`}</span>
          <span className={classes.ticketsTicketStopsItem2}>
            {props.segments[0].stops.join(", ")}
          </span>
        </div>
      </div>
      <div className={classes.ticketsTicketSegmentsInfo}>
        <div className={classes.ticketsTicketRoute}>
          <span
            className={classes.ticketsTicketRouteItem1}
          >{`${props.segments[1].origin} - ${props.segments[1].destination}`}</span>
          <span className={classes.ticketsTicketRouteItem2}>11:20 – 00:50</span>
        </div>
        <div className={classes.ticketsTicketDuration}>
          <span className={classes.ticketsTicketDurationItem1}>В ПУТИ</span>
          <span className={classes.ticketsTicketDurationItem2}>13ч 30м</span>
        </div>
        <div className={classes.ticketsTicketStops}>
          <span
            className={classes.ticketsTicketStopsItem1}
          >{`${props.segments[1].stops.length} ПЕРЕСАДКА`}</span>
          <span className={classes.ticketsTicketStopsItem2}>
            {props.segments[1].stops.join(", ")}
          </span>
        </div>
      </div>
    </>
  );
};

export default Ticket;
