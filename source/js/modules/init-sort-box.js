const breakpointMob = window.matchMedia("(max-width:767px)");

const initSort = () => {
  const sortWrapper = document.querySelector(".modal--sort .modal__content");
  const buttonSort = document.querySelector(".sorts");
  buttonSort.addEventListener("click", (e) => {
    if (sortWrapper) {
      const coords = buttonSort.getBoundingClientRect();
      sortWrapper.style.left = coords.left - 130 + "px";
      sortWrapper.style.top = coords.bottom - 15 + "px";
    }
  });
};

const initSortBox = () => {
  const breakpointChecker = () => {
    if (!breakpointMob.matches) {
      initSort();
    }
  };

  breakpointMob.addListener(breakpointChecker);
  breakpointChecker();
};

export { initSortBox };
