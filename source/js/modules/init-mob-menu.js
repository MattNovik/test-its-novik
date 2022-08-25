const mainNav = document.querySelector(".main-nav");
const stand = document.querySelector(".stand");
const html = document.querySelector("html");

const initMobMenu = () => {
  const mainOpener = mainNav.querySelector(".main-nav__toggle");
  const mainClose = mainNav.querySelector(".main-nav__close");
  const mainWrapper = mainNav.querySelector(".main-nav__wrapper");

  mainOpener.addEventListener("click", () => {
    stand.classList.add("stand--open");
    html.classList.add("html__hiddden");
    mainWrapper.classList.add("open");
    stand.addEventListener("click", () => {
      stand.classList.remove("stand--open");
      mainWrapper.classList.remove("open");
      html.classList.remove("html__hiddden");
      stand.removeEventListener("click", () => {
        stand.classList.remove("stand--open");
        mainWrapper.classList.remove("open");
      });
    });
  });
  mainClose.addEventListener("click", () => {
    stand.classList.remove("stand--open");
    mainWrapper.classList.remove("open");
    html.classList.remove("html__hiddden");
    stand.removeEventListener("click", () => {
      stand.classList.remove("stand--open");
      mainWrapper.classList.remove("open");
      html.classList.remove("html__hiddden");
    });
  });
};

export { initMobMenu };
