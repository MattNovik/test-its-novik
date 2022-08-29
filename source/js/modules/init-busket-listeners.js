import { createBusketItem } from "../utils/create-busket-item";
import { deleteItem, decreaseItem, addItem } from "../utils/items-utils";

const itemsList = document.querySelectorAll(".catalog__item-form");
const busketList = document.querySelector(".busket__list");
const busketDelete = document.querySelectorAll(".busket__delete-item");
const busketClear = document.querySelector(".busket__clear");
const busketItemAdd = document.querySelectorAll(".busket__add");
const busketItemDecrease = document.querySelectorAll(".busket__delete");

const clearBusket = () => {
  const busketItemList = document.querySelectorAll(".busket__item");
  Array.from(busketItemList).map((item) => {
    item.remove();
  });
  document.querySelector(".busket__products-count").textContent = "0";
  document.querySelector(".busket__summ-count").textContent = 0;
  document.querySelector(".header__busket-number").textContent = 0;
};

const itemsListeners = (parent, list) => {
  Array.from(list).map((item) => {
    item.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(item);
      const itemData = {
        picturePath: formData.get("picturePath"),
        pictureName: formData.get("pictureName"),
        pictureType: formData.get("pictureType"),
        pictureAlt: formData.get("pictureAlt"),
        name: formData.get("name"),
        price: formData.get("price"),
        type: formData.get("type"),
        date: formData.get("date"),
        popular: formData.get("popular"),
        id: formData.get("id"),
      };
      const newElement = createBusketItem(itemData);
      const newBusketItemList = document.querySelectorAll(".busket__item");
      const newBusketItemListId = [];

      Array.from(newBusketItemList).map((item) => {
        newBusketItemListId.push(+item.querySelector('input[name="id"]').value);
      });

      if (!newBusketItemListId.includes(+itemData.id)) {
        document.querySelector(".header__busket-number").textContent =
          +document.querySelector(".header__busket-number").textContent + 1;
        document.querySelector(".busket__products-count").textContent =
          +document.querySelector(".busket__products-count").textContent + 1;
        parent.appendChild(newElement);
        const newBusketItemAdd = newElement.querySelector(".busket__add");
        const newBusketItemDescrease =
          newElement.querySelector(".busket__delete");
        newBusketItemAdd.addEventListener("click", addItem);
        newBusketItemDescrease.addEventListener("click", decreaseItem);
        newElement
          .querySelector(".busket__delete-item")
          .addEventListener("click", deleteItem);
      } else {
        document
          .getElementById(itemData.id)
          .querySelector(".busket__product-count").textContent =
          +document
            .getElementById(itemData.id)
            .querySelector(".busket__product-count").textContent + 1;
      }
      document.querySelector(".busket__summ-count").textContent = (
        +document
          .querySelector(".busket__summ-count")
          .textContent.replace(/[^0-9]/g, "") +
        +itemData.price.replace(/[^0-9]/g, "")
      ).toLocaleString("ru");
    });
  });
};

const busketListeners = () => {
  itemsListeners(busketList, itemsList);

  Array.from(busketDelete).map((item) => {
    item.addEventListener("click", deleteItem);
  });
  Array.from(busketItemAdd).map((item) => {
    item.addEventListener("click", addItem);
  });
  Array.from(busketItemDecrease).map((item) => {
    item.addEventListener("click", decreaseItem);
  });

  busketClear.addEventListener("click", clearBusket);
};

export { busketListeners, itemsListeners };
