const createBusketItem = (item) => {
  const newElem = document.createElement("li");
  newElem.classList.add("busket__item");
  newElem.setAttribute("id", item.id);
  const newPicture = document.createElement("picture");
  newPicture.classList.add("busket__item-img");
  newElem.appendChild(newPicture);
  const newSource = document.createElement("source");
  newSource.setAttribute("type", "image/webp");
  newSource.setAttribute(
    "srcset",
    `${
      "img/" +
      item.picturePath +
      "/" +
      item.pictureName +
      ".webp" +
      ", " +
      "img/" +
      item.picturePath +
      "/" +
      item.pictureName +
      "@2x.webp" +
      " 2x"
    }`
  );
  newPicture.appendChild(newSource);
  const newImg = document.createElement("img");
  newImg.setAttribute(
    "src",
    `${
      "img/" +
      item.picturePath +
      "/" +
      item.pictureName +
      "." +
      item.pictureType
    }`
  );
  newImg.setAttribute(
    "srcset",
    `${
      "img/" +
      item.picturePath +
      "/" +
      item.pictureName +
      "@2x." +
      item.pictureType +
      " 2x"
    }`
  );
  newImg.setAttribute("width", 278);
  newImg.setAttribute("height", 278);
  newImg.setAttribute("alt", item.pictureAlt);
  newPicture.appendChild(newImg);
  const newNamePrice = document.createElement("div");
  newNamePrice.classList.add("busket__name-price");
  newElem.appendChild(newNamePrice);
  const newElemName = document.createElement("span");
  newElemName.classList.add("busket__product-name");
  newElemName.textContent = item.name;
  newNamePrice.appendChild(newElemName);
  const newElemPrice = document.createElement("span");
  newElemPrice.classList.add("busket__price");
  newElemPrice.textContent = item.price + " ₽";
  newNamePrice.appendChild(newElemPrice);
  const newCounter = document.createElement("div");
  newCounter.classList.add("busket__counter");
  newElem.appendChild(newCounter);
  const newButtonDescrease = document.createElement("button");
  newButtonDescrease.classList.add("busket__delete");
  newButtonDescrease.setAttribute("type", "button");
  newButtonDescrease.setAttribute("aria-label", "уменьшить товар на 1");
  newCounter.appendChild(newButtonDescrease);
  newButtonDescrease.insertAdjacentHTML(
    "afterbegin",
    `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.3335 8H12.6668" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `
  );
  const newCounterSpan = document.createElement("span");
  newCounterSpan.classList.add("busket__product-count");
  newCounterSpan.textContent = 1;
  newCounter.appendChild(newCounterSpan);
  const newButtonAdd = document.createElement("button");
  newButtonAdd.classList.add("busket__add");
  newButtonAdd.setAttribute("type", "button");
  newButtonAdd.setAttribute("aria-label", "добавить товар");
  newCounter.appendChild(newButtonAdd);
  newButtonAdd.insertAdjacentHTML(
    "afterbegin",
    `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11 4.58337V17.4167" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M4.58301 11H17.4163" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `
  );
  const newButtonDelete = document.createElement("button");
  newButtonDelete.classList.add("busket__delete-item");
  newButtonDelete.setAttribute("type", "button");
  newButtonDelete.setAttribute("aria-label", "удалить товар");
  newElem.appendChild(newButtonDelete);
  newButtonDelete.insertAdjacentHTML(
    "afterbegin",
    `<?xml version="1.0" ?><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}</style></defs><title/><g id="cross"><line class="cls-1" x1="7" x2="25" y1="7" y2="25"/><line class="cls-1" x1="7" x2="25" y1="25" y2="7"/></g></svg>
    `
  );
  const newInputPath = document.createElement("input");
  newInputPath.setAttribute("type", "hidden");
  newInputPath.setAttribute("name", "picturePath");
  newInputPath.setAttribute("value", item.picturePath);
  newElem.appendChild(newInputPath);
  const newInputpictureAlt = document.createElement("input");
  newInputpictureAlt.setAttribute("type", "hidden");
  newInputpictureAlt.setAttribute("name", "pictureAlt");
  newInputpictureAlt.setAttribute("value", item.pictureAlt);
  newElem.appendChild(newInputpictureAlt);
  const newInputpictureName = document.createElement("input");
  newInputpictureName.setAttribute("type", "hidden");
  newInputpictureName.setAttribute("name", "pictureName");
  newInputpictureName.setAttribute("value", item.pictureName);
  newElem.appendChild(newInputpictureName);
  const newInputpictureType = document.createElement("input");
  newInputpictureType.setAttribute("type", "hidden");
  newInputpictureType.setAttribute("name", "pictureType");
  newInputpictureType.setAttribute("value", item.pictureType);
  newElem.appendChild(newInputpictureType);
  const newInputName = document.createElement("input");
  newInputName.setAttribute("type", "hidden");
  newInputName.setAttribute("name", "name");
  newInputName.setAttribute("value", item.name);
  newElem.appendChild(newInputName);
  const newInputPrice = document.createElement("input");
  newInputPrice.setAttribute("type", "hidden");
  newInputPrice.setAttribute("name", "price");
  newInputPrice.setAttribute("value", item.price);
  newElem.appendChild(newInputPrice);
  const newInputType = document.createElement("input");
  newInputType.setAttribute("type", "hidden");
  newInputType.setAttribute("name", "type");
  newInputType.setAttribute("value", item.type);
  newElem.appendChild(newInputType);
  const newInputDate = document.createElement("input");
  newInputDate.setAttribute("type", "hidden");
  newInputDate.setAttribute("name", "date");
  newInputDate.setAttribute("value", item.date);
  newElem.appendChild(newInputDate);
  const newInputPopular = document.createElement("input");
  newInputPopular.setAttribute("type", "hidden");
  newInputPopular.setAttribute("name", "popular");
  newInputPopular.setAttribute("value", item.popular);
  newElem.appendChild(newInputPopular);
  const newInputId = document.createElement("input");
  newInputId.setAttribute("type", "hidden");
  newInputId.setAttribute("name", "id");
  newInputId.setAttribute("value", item.id);
  newElem.appendChild(newInputId);
  return newElem;
};

export { createBusketItem };
