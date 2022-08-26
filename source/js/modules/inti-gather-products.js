const filterForm = document.querySelector(".filters__wrapper");
const productsList = document.querySelectorAll(".catalog__item-form");

const initFilter = () => {
  const productsData = [];
  const filterFormData = [];
  filterForm.addEventListener("submit", (e) => {
    e.preventDefault();
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
      };
      productsData.push(itemList);
    });
  });

  return { productsData, filterFormData };
};

export { initFilter };
