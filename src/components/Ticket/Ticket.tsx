import classes from "./Ticket.module.scss";
import { addMinutes, format, intervalToDuration, parseISO } from "date-fns";

import { type Ticket } from "../../types/aviasalesDataTypes";

const calculateFlightTimes = <T extends { duration: number; date: string }>(segment: T) => {
  const flightDuration = intervalToDuration({ start: 0, end: segment.duration * 60 * 1000 });
  const departureDate = parseISO(segment.date);

  const departureTime = format(departureDate, "HH:mm");
  const arrivalTime = format(addMinutes(departureDate, segment.duration), "HH:mm");

  return {
    departureTime,
    arrivalTime,
    flightDuration,
  };
};

const Ticket = (props: Ticket) => {
  const flights = props.segments.map((segment) => {
    const { departureTime, arrivalTime, flightDuration } = calculateFlightTimes(segment);

    return (
      <div key={segment.date} className={classes.ticketsTicketFlightsInfo}>
        <div className={classes.ticketsTicketRoute}>
          <span
            className={classes.ticketsTicketRouteItem1}
          >{`${segment.origin} - ${segment.destination}`}</span>
          <span
            className={classes.ticketsTicketRouteItem2}
          >{`${departureTime} - ${arrivalTime}`}</span>
        </div>
        <div className={classes.ticketsTicketDuration}>
          <span className={classes.ticketsTicketDurationItem1}>В ПУТИ</span>
          <span className={classes.ticketsTicketDurationItem2}>{`${
            flightDuration.hours !== undefined ? flightDuration.hours : 0
          }ч ${flightDuration.minutes !== undefined ? flightDuration.minutes : 0}м`}</span>
        </div>
        <div className={classes.ticketsTicketStops}>
          <span className={classes.ticketsTicketStopsItem1}>
            {`${segment.stops.length} ${
              segment.stops.length === 1
                ? "ПЕРЕСАДКА"
                : segment.stops.length > 1
                ? "ПЕРЕСАДКИ"
                : "ПЕРЕСАДОК"
            }`}
          </span>
          <span className={classes.ticketsTicketStopsItem2}>
            {segment.stops.length > 0 ? segment.stops.join(", ") : "—"}
          </span>
        </div>
      </div>
    );
  });

  return (
    <>
      <header className={classes.ticketsTicketHeader}>
        <span className={classes.ticketsTicketHeaderPrice}>
          {new Intl.NumberFormat("ru").format(props.price)} Р
        </span>
        <div className={classes.ticketsTicketHeaderArlineLogo}>
          <img src={`http://pics.avs.io/110/36/${props.carrier}.png.`} alt="arline-logo" />
        </div>
      </header>
      {flights}
    </>
  );
};

export default Ticket;
