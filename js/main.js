class Header {
  selectors = {
    root: "[data-js-header]",
    menu: "[data-js-menu]",
    burgerButton: "[data-js-burger-button]",
  };

  stateClassses = {
    isActive: "is-active",
    isLock: "is-lock",
    mobile: "hidden-mobile",
  };

  constructor() {
    this.rooElement = document.querySelector(this.selectors.root);
    this.menuElement = this.rooElement.querySelector(this.selectors.menu);
    this.burgerButtonElement = this.rooElement.querySelector(
      this.selectors.burgerButton
    );
    this.linkElement = this.rooElement.querySelectorAll(".header__list-link");

    this.bindEvents();
  }

  onBurgerButtonClick = () => {
    this.burgerButtonElement.classList.toggle(this.stateClassses.isActive);
    this.menuElement.classList.toggle(this.stateClassses.isActive);
    this.menuElement.classList.toggle(this.stateClassses.mobile);
    document.querySelector("html").classList.toggle(this.stateClassses.isLock);
    this.linkElement.forEach((item) => {
      item.addEventListener("click", this.onBurgerButtonClick);
    });
  };

  bindEvents() {
    this.burgerButtonElement.addEventListener(
      "click",
      this.onBurgerButtonClick
    );
  }
}

new Header();
