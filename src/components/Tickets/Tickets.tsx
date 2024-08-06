const Tickets = () => {
  return (
    <ul className="aviasales-app__tickets tickets">
      <li className="tickets__ticket">
        <header className="tickets__ticket-header">
          <span className="tickets__ticket-header-price">13 400 Р</span>
          <div className="tickets__ticket-header-arline-logo">
            <img src="./src/img/S7 Logo.svg" alt="arline-logo" />
          </div>
        </header>
        <div className="tickets__ticket-route-info">
          <div className="tickets__ticket-route">
            <span className="">MOW – HKT</span>
            <span>11:20 – 00:50</span>
          </div>
          <div className="tickets__ticket-length">В пути 13ч 30м</div>
          <div className="tickets__ticket-stops">1 пересадка HKG</div>
        </div>
      </li>
    </ul>
  );
};

export default Tickets;
