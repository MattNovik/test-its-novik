import { iosVhFix } from "./utils/ios-vh-fix";
import { modals, initModals } from "./modules/modals/init-modals";
import { initCustomSelect } from "./modules/form/init-custom-select";
import { initFormValidate } from "./modules/form/init-form-validate";
import { initSliderMain } from "./modules/init-slider";
import { initSortBox } from "./modules/init-sort-box";
import { initFilterSort } from "./modules/init-filter-sort";
import { busketListeners } from "./modules/init-busket-listeners";
import { initSwipe } from "./modules/init-swipes";
// ---------------------------------

window.addEventListener("DOMContentLoaded", () => {
  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener("load", () => {
    initSwipe();
    busketListeners();
    initFilterSort();
    initSortBox();
    initSliderMain();
    initModals();
    initCustomSelect();
    initFormValidate();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используейтся matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
