import { createItem } from "../utils/create-item";
import { gatherFormData, createFormData } from "../utils/gather-form-data";
import { filterSort } from "../utils/filter-sort";
import { itemsListeners } from "./init-busket-listeners";
import { modals } from "./modals/init-modals";

const busketList = document.querySelector(".busket__list");
const filterForms = document.querySelectorAll(".filters__wrapper");
const sortButtons = document.querySelectorAll(".sort-wrapper__button");
const catalog = document.querySelector(".catalog");
const breakpointMob = window.matchMedia("(max-width:767px)");

const initFilterSort = () => {
  const productsList = document.querySelectorAll(".catalog__item-form");
  let productsData = [];
  let filterFormData = [];
  let sortValue = "";
  let desctopForm = filterForms[0];
  let mobForm = filterForms[1];

  Array.from(sortButtons).map((item) => {
    item.addEventListener("click", (e) => {
      modals.close("modal-sort");
      Array.from(sortButtons).map((i) => {
        i.classList.remove("active");
      });
      document.querySelector(".sorts span").textContent = e.target.textContent;
      e.target.classList.add("active");
      filterFormData = [];
      productsData = [];
      sortValue = e.target.value;
      if (!breakpointMob.matches) {
        createFormData(desctopForm, filterFormData);
      } else {
        createFormData(mobForm, filterFormData);
      }
      gatherFormData(productsList, productsData);
      catalog.innerHTML = "";
      catalog.appendChild(
        createItem(filterSort(productsData, filterFormData, sortValue))
      );
      const itemsList = document.querySelectorAll(".catalog__item-form");
      itemsListeners(busketList, itemsList);
    });
  });
  Array.from(filterForms).map((item) => {
    item.addEventListener("submit", (e) => {
      e.preventDefault();
      filterFormData = [];
      productsData = [];
      createFormData(item, filterFormData);
      gatherFormData(productsList, productsData);
      filterSort(productsData, filterFormData);
      catalog.innerHTML = "";
      catalog.appendChild(
        createItem(filterSort(productsData, filterFormData, sortValue))
      );
      const itemsList = document.querySelectorAll(".catalog__item-form");
      itemsListeners(busketList, itemsList);
    });
  });
};

export { initFilterSort };
