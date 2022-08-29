const gatherFormData = (list, finalList) => {
  Array.from(list).map((item) => {
    const formData = new FormData(item);
    const itemList = {
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
    finalList.push(itemList);
  });
};

const createFormData = (form, newList) => {
  const formData = new FormData(form);
  for (let i of formData.values()) {
    newList.push(i);
  }
};

export { gatherFormData, createFormData };
