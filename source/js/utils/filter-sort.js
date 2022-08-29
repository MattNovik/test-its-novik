import { sortFunctions } from "./sort-function-object";

const filterSort = (list, fromList, value) => {
  return list
    .filter((i) => fromList.every((k) => i.type.split(" ").includes(k)))
    .sort(sortFunctions[value]);
};

export { filterSort };
