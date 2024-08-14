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

export default parseStops;
