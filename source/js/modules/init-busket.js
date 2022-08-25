const busketOpener = document.querySelector(".header__busket-opener");
const busket = document.querySelector(".busket");
const stand = document.querySelector(".stand");

const initBusket = () => {
  const busketCLoser = busket.querySelector(".busket__close");

  busketOpener.addEventListener("click", () => {
    stand.classList.add("stand--open");
    busket.classList.add("open");
    stand.addEventListener("click", () => {
      stand.classList.remove("stand--open");
      busket.classList.remove("open");
      stand.removeEventListener("click", () => {
        stand.classList.remove("stand--open");
        busket.classList.remove("open");
      });
    });
    busketCLoser.addEventListener("click", () => {
      stand.classList.remove("stand--open");
      busket.classList.remove("open");
      stand.removeEventListener("click", () => {
        stand.classList.remove("stand--open");
        busket.classList.remove("open");
      });
    });
  });
};

export { initBusket };
