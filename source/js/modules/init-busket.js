const busketOpener = document.querySelector(".header__busket-opener");
const busket = document.querySelector(".busket");
const stand = document.querySelector(".stand");
const html = document.querySelector("html");

const initBusket = () => {
  const busketCLoser = busket.querySelector(".busket__close");

  busketOpener.addEventListener("click", () => {
    stand.classList.add("stand--open");
    busket.classList.add("open");
    html.classList.add("html__hiddden");
    stand.addEventListener("click", () => {
      stand.classList.remove("stand--open");
      busket.classList.remove("open");
      html.classList.remove("html__hiddden");
      stand.removeEventListener("click", () => {
        stand.classList.remove("stand--open");
        busket.classList.remove("open");
        html.classList.remove("html__hiddden");
      });
    });
    busketCLoser.addEventListener("click", () => {
      stand.classList.remove("stand--open");
      busket.classList.remove("open");
      html.classList.remove("html__hiddden");
      stand.removeEventListener("click", () => {
        stand.classList.remove("stand--open");
        busket.classList.remove("open");
        html.classList.remove("html__hiddden");
      });
    });
  });
};

export { initBusket };
