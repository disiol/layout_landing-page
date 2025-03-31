'use strict';

export class Menu {
  constructor() {
    this.burgerMenu = document.getElementById('header__burger-menu-toggle');
    this.menu = document.getElementById('menu-toggle');
    this.menuClose = document.getElementById('menu-close');
  }

  init() {
    this.burgerMenu.addEventListener('click', () => this.open());
    this.menuClose.addEventListener('click', () => this.close());

    document.addEventListener('click', (event) =>
      this.closeOnOutsideClick(event),);
  }

  open() {
    this.menu.classList.add('menu--open');
  }

  close() {
    this.menu.classList.remove('menu--open');
  }

  closeOnOutsideClick(event) {
    if (
      !this.menu.contains(event.target) &&
      !this.burgerMenu.contains(event.target)
    ) {
      this.close();
    }
  }
}
