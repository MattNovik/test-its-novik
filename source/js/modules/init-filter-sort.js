import { createItem } from "../utils/create-item";
import { gatherFormData, createFormData } from "../utils/gather-form-data";
import { filterSort } from "../utils/filter-sort";
import { itemsListeners } from "./init-busket-listeners";

const busketList = document.querySelector(".busket__list");
const filterForm = document.querySelector(".filters__wrapper");
const sortButtons = document.querySelectorAll(".sort-wrapper__button");
const catalog = document.querySelector(".catalog");

const initFilterSort = () => {
  const productsList = document.querySelectorAll(".catalog__item-form");
  let productsData = [];
  let filterFormData = [];
  let sortValue = "";

  Array.from(sortButtons).map((item) => {
    item.addEventListener("click", (e) => {
      Array.from(sortButtons).map((i) => {
        i.classList.remove("active");
      });
      e.target.classList.add("active");
      filterFormData = [];
      productsData = [];
      sortValue = e.target.value;
      createFormData(filterForm, filterFormData);
      gatherFormData(productsList, productsData);
      catalog.innerHTML = "";
      catalog.appendChild(
        createItem(filterSort(productsData, filterFormData, sortValue))
      );
      const itemsList = document.querySelectorAll(".catalog__item-form");
      itemsListeners(busketList, itemsList);
    });
  });

  filterForm.addEventListener("submit", (e) => {
    e.preventDefault();
    filterFormData = [];
    productsData = [];
    createFormData(filterForm, filterFormData);
    gatherFormData(productsList, productsData);
    filterSort(productsData, filterFormData);
    catalog.innerHTML = "";
    catalog.appendChild(
      createItem(filterSort(productsData, filterFormData, sortValue))
    );
    const itemsList = document.querySelectorAll(".catalog__item-form");
    itemsListeners(busketList, itemsList);
  });
};

export { initFilterSort };
