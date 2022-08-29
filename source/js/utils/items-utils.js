const nameProductsCountList = [
  "товаров",
  "товар",
  "товара",
  "товара",
  "товара",
  "товаров",
  "товаров",
  "товаров",
  "товаров",
  "товаров",
];

const deleteItem = (e) => {
  e.target.closest("li").remove();
  document.querySelector(".busket__products-count").textContent =
    +document.querySelector(".busket__products-count").textContent - 1;
  document.querySelector(".busket__summ-count").textContent = (
    +document
      .querySelector(".busket__summ-count")
      .textContent.replace(/[^0-9]/g, "") -
    +e.target
      .closest("li")
      .querySelector('input[name="price"')
      .value.replace(/[^0-9]/g, "") *
      +e.target.closest("li").querySelector(".busket__product-count")
        .textContent
  ).toLocaleString("ru");
  document.querySelector(".header__busket-number").textContent =
    +document.querySelector(".header__busket-number").textContent - 1;
  const nameProductsCount = +document.querySelector(".busket__products-count")
    .textContent[
    document.querySelector(".busket__products-count").textContent.length - 1
  ];
  document.querySelector(".busket__product-count-name").textContent =
    nameProductsCountList[nameProductsCount];
};

const decreaseItem = (e) => {
  if (
    +e.target.closest("li").querySelector(".busket__product-count")
      .textContent === 1
  ) {
    e.target.closest("li").remove();
    document.querySelector(".header__busket-number").textContent =
      +document.querySelector(".header__busket-number").textContent - 1;
    document.querySelector(".busket__products-count").textContent =
      +document.querySelector(".busket__products-count").textContent - 1;
  } else {
    e.target.closest("li").querySelector(".busket__product-count").textContent =
      +e.target.closest("li").querySelector(".busket__product-count")
        .textContent - 1;
  }
  document.querySelector(".busket__summ-count").textContent = (
    +document
      .querySelector(".busket__summ-count")
      .textContent.replace(/[^0-9]/g, "") -
    +e.target
      .closest("li")
      .querySelector('input[name="price"')
      .value.replace(/[^0-9]/g, "")
  ).toLocaleString("ru");
  const nameProductsCount = +document.querySelector(".busket__products-count")
    .textContent[
    document.querySelector(".busket__products-count").textContent.length - 1
  ];
  document.querySelector(".busket__product-count-name").textContent =
    nameProductsCountList[nameProductsCount];
};

const addItem = (e) => {
  e.target.closest("li").querySelector(".busket__product-count").textContent =
    +e.target.closest("li").querySelector(".busket__product-count")
      .textContent + 1;
  document.querySelector(".busket__summ-count").textContent = (
    +document
      .querySelector(".busket__summ-count")
      .textContent.replace(/[^0-9]/g, "") +
    +e.target
      .closest("li")
      .querySelector('input[name="price"')
      .value.replace(/[^0-9]/g, "")
  ).toLocaleString("ru");
  const nameProductsCount = +document.querySelector(".busket__products-count")
    .textContent[
    document.querySelector(".busket__products-count").textContent.length - 1
  ];
  document.querySelector(".busket__product-count-name").textContent =
    nameProductsCountList[nameProductsCount];
};

export { deleteItem, decreaseItem, addItem };
