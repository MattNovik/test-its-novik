const sortFunctions = {
  expen(a, b) {
    return +b.price - +a.price;
  },
  notexpen(a, b) {
    return +a.price - +b.price;
  },
  popular(a, b) {
    return +b.popular - +a.popular;
  },
  new(a, b) {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  },
};

export { sortFunctions };
