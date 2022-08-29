import { modals } from "./modals/init-modals";

// элемент
const filterModal = document.querySelector(
  ".modal--mob-filter .modal__content"
);
const sortModal = document.querySelector(".modal--sort .modal__content");

const initSwipe = () => {
  let initialPoint;
  let finalPoint;
  filterModal.addEventListener(
    "touchstart",
    function (event) {
      //event.preventDefault();
      //event.stopPropagation();
      initialPoint = event.changedTouches[0];
    },
    false
  );
  filterModal.addEventListener(
    "touchend",
    function (event) {
      //event.preventDefault();
      event.stopPropagation();
      finalPoint = event.changedTouches[0];
      let xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX);
      let yAbs = Math.abs(initialPoint.pageY - finalPoint.pageY);
      if (xAbs > 20 || yAbs > 20) {
        if (xAbs > yAbs) {
        } else {
          if (finalPoint.pageY < initialPoint.pageY) {
            /*СВАЙП ВВЕРХ*/
          } else {
            if (filterModal) {
              modals.close("modal-mob-filter");
            }
          }
        }
      }
    },
    false
  );

  sortModal.addEventListener(
    "touchstart",
    function (event) {
      //event.preventDefault();
      //event.stopPropagation();
      initialPoint = event.changedTouches[0];
    },
    false
  );
  sortModal.addEventListener(
    "touchend",
    function (event) {
      //event.preventDefault();
      event.stopPropagation();
      finalPoint = event.changedTouches[0];
      let xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX);
      let yAbs = Math.abs(initialPoint.pageY - finalPoint.pageY);
      if (xAbs > 20 || yAbs > 20) {
        if (xAbs > yAbs) {
        } else {
          if (finalPoint.pageY < initialPoint.pageY) {
            /*СВАЙП ВВЕРХ*/
          } else {
            if (sortModal) {
              modals.close("modal-sort");
            }
          }
        }
      }
    },
    false
  );
};

export { initSwipe };
