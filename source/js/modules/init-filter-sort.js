const filterForm = document.querySelector(".filters__wrapper");
const sortButtons = document.querySelectorAll(".sort-wrapper__button");
const catalog = document.querySelector(".catalog");

const initFilterSort = () => {
  const productsList = document.querySelectorAll(".catalog__item-form");
  let productsData = [];
  let filterFormData = [];
  let sortValue = "";
  const sortFunctions = {
    expen: (a, b) => {
      b.price - a.price;
    },
    notexpen: (a, b) => {
      a.price - b.price;
    },
    popular: (a, b) => {
      a.popular - b.popular;
    },
    new: (a, b) => {
      a.date - b.date;
    },
  };

  Array.from(sortButtons).map((item) => {
    item.addEventListener("click", (e) => {
      filterFormData = [];
      productsData = [];
      sortValue = e.target.value;
      const formData = new FormData(filterForm);
      for (let i of formData.values()) {
        filterFormData.push(i);
      }
      Array.from(productsList).map((item) => {
        const formData = new FormData(item);
        const itemList = {
          picturePath: formData.get("picturePath"),
          pictureName: formData.get("pictureName"),
          pictureType: formData.get("pictureType"),
          pictureAlt: formData.get("pictureAlt"),
          name: formData.get("name"),
          price: formData.get("price"),
          type: formData.get("type"),
        };
        productsData.push(itemList);
      });
      const newProductData = productsData
        .filter((item) =>
          filterFormData.every((k) => item.type.split(" ").includes(k))
        )
        .sort(sortFunctions[sortValue]);
      const newList = document.createElement("ul");
      newList.classList.add("catalog__list");
      newProductData.map((item) => {
        const newElem = document.createElement("li");
        newElem.classList.add("catalog__item");
        const newForm = document.createElement("form");
        newForm.classList.add("catalog__item-form");
        newElem.appendChild(newForm);
        const newPicture = document.createElement("picture");
        newPicture.classList.add("catalog__item-img");
        newForm.appendChild(newPicture);
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
        const newElemName = document.createElement("p");
        newElemName.classList.add("catalog__item-name");
        newElemName.textContent = item.name;
        newForm.appendChild(newElemName);
        const newElemPrice = document.createElement("span");
        newElemPrice.classList.add("catalog__item-price");
        newElemPrice.textContent = item.price + " ₽";
        newForm.appendChild(newElemPrice);
        const newElemButton = document.createElement("button");
        newElemButton.classList.add("catalog__add-item");
        newElemButton.setAttribute("type", "submit");
        newElemButton.setAttribute("aria-label", "добавить товар");
        newForm.appendChild(newElemButton);
        newElemButton.insertAdjacentHTML(
          "afterbegin",
          `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 4.58337V17.4167" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M4.58301 11H17.4163" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`
        );
        const newInputPath = document.createElement("input");
        newInputPath.setAttribute("type", "hidden");
        newInputPath.setAttribute("value", item.picturetPath);
        newForm.appendChild(newInputPath);
        const newInputpictureAlt = document.createElement("input");
        newInputpictureAlt.setAttribute("type", "hidden");
        newInputpictureAlt.setAttribute("value", item.pictureAlt);
        newForm.appendChild(newInputpictureAlt);
        const newInputpictureName = document.createElement("input");
        newInputpictureName.setAttribute("type", "hidden");
        newInputpictureName.setAttribute("value", item.pictureName);
        newForm.appendChild(newInputpictureName);
        const newInputpictureType = document.createElement("input");
        newInputpictureType.setAttribute("type", "hidden");
        newInputpictureType.setAttribute("value", item.pictureType);
        newForm.appendChild(newInputpictureType);
        const newInputName = document.createElement("input");
        newInputName.setAttribute("type", "hidden");
        newInputName.setAttribute("value", item.name);
        newForm.appendChild(newInputName);
        const newInputPrice = document.createElement("input");
        newInputPrice.setAttribute("type", "hidden");
        newInputPrice.setAttribute("value", item.price);
        newForm.appendChild(newInputPrice);
        const newInputType = document.createElement("input");
        newInputType.setAttribute("type", "hidden");
        newInputType.setAttribute("value", item.type);
        newForm.appendChild(newInputType);
        /* p.catalog__item-name!=item.itemName
                span.catalog__item-price #{item.itemPrice} ₽
                button.catalog__add-item(type="submit" aria-label="добавить товар")
                  +icon('icon-plus',22,22) */

        newList.appendChild(newElem);
      });
      catalog.innerHTML = "";
      catalog.appendChild(newList);
    });
  });

  filterForm.addEventListener("submit", (e) => {
    e.preventDefault();
    filterFormData = [];
    productsData = [];
    const formData = new FormData(filterForm);
    for (let i of formData.values()) {
      filterFormData.push(i);
    }
    Array.from(productsList).map((item) => {
      const formData = new FormData(item);
      const itemList = {
        picturePath: formData.get("picturePath"),
        pictureName: formData.get("pictureName"),
        pictureType: formData.get("pictureType"),
        pictureAlt: formData.get("pictureAlt"),
        name: formData.get("name"),
        price: formData.get("price"),
        type: formData.get("type"),
      };
      productsData.push(itemList);
    });
    const newProductData = productsData
      .filter((item) =>
        filterFormData.every((k) => item.type.split(" ").includes(k))
      )
      .sort(sortFunctions[sortValue]);
    const newList = document.createElement("ul");
    newList.classList.add("catalog__list");
    newProductData.map((item) => {
      const newElem = document.createElement("li");
      newElem.classList.add("catalog__item");
      const newForm = document.createElement("form");
      newForm.classList.add("catalog__item-form");
      newElem.appendChild(newForm);
      const newPicture = document.createElement("picture");
      newPicture.classList.add("catalog__item-img");
      newForm.appendChild(newPicture);
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
      const newElemName = document.createElement("p");
      newElemName.classList.add("catalog__item-name");
      newElemName.textContent = item.name;
      newForm.appendChild(newElemName);
      const newElemPrice = document.createElement("span");
      newElemPrice.classList.add("catalog__item-price");
      newElemPrice.textContent = item.price + " ₽";
      newForm.appendChild(newElemPrice);
      const newElemButton = document.createElement("button");
      newElemButton.classList.add("catalog__add-item");
      newElemButton.setAttribute("type", "submit");
      newElemButton.setAttribute("aria-label", "добавить товар");
      newForm.appendChild(newElemButton);
      newElemButton.insertAdjacentHTML(
        "afterbegin",
        `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 4.58337V17.4167" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M4.58301 11H17.4163" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`
      );
      const newInputPath = document.createElement("input");
      newInputPath.setAttribute("type", "hidden");
      newInputPath.setAttribute("value", item.picturetPath);
      newForm.appendChild(newInputPath);
      const newInputpictureAlt = document.createElement("input");
      newInputpictureAlt.setAttribute("type", "hidden");
      newInputpictureAlt.setAttribute("value", item.pictureAlt);
      newForm.appendChild(newInputpictureAlt);
      const newInputpictureName = document.createElement("input");
      newInputpictureName.setAttribute("type", "hidden");
      newInputpictureName.setAttribute("value", item.pictureName);
      newForm.appendChild(newInputpictureName);
      const newInputpictureType = document.createElement("input");
      newInputpictureType.setAttribute("type", "hidden");
      newInputpictureType.setAttribute("value", item.pictureType);
      newForm.appendChild(newInputpictureType);
      const newInputName = document.createElement("input");
      newInputName.setAttribute("type", "hidden");
      newInputName.setAttribute("value", item.name);
      newForm.appendChild(newInputName);
      const newInputPrice = document.createElement("input");
      newInputPrice.setAttribute("type", "hidden");
      newInputPrice.setAttribute("value", item.price);
      newForm.appendChild(newInputPrice);
      const newInputType = document.createElement("input");
      newInputType.setAttribute("type", "hidden");
      newInputType.setAttribute("value", item.type);
      newForm.appendChild(newInputType);
      /* p.catalog__item-name!=item.itemName
                span.catalog__item-price #{item.itemPrice} ₽
                button.catalog__add-item(type="submit" aria-label="добавить товар")
                  +icon('icon-plus',22,22) */

      newList.appendChild(newElem);
    });
    catalog.innerHTML = "";
    catalog.appendChild(newList);
  });
};

export { initFilterSort };
