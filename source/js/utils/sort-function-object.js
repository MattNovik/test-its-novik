const sortFunctions = {
  expen(a, b) {
    return +b.price.replace(/[^0-9]/g, "") - +a.price.replace(/[^0-9]/g, "");
  },
  notexpen(a, b) {
    return +a.price.replace(/[^0-9]/g, "") - +b.price.replace(/[^0-9]/g, "");
  },
  popular(a, b) {
    return +b.popular - +a.popular;
  },
  new(a, b) {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  },
};

export { sortFunctions };
