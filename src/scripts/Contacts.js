/**
 * Клас для керування блоком контактів у хедері
 */
'use strict';

export default class Contacts {
  constructor() {
    // DOM елементи
    this.contactsToggle = document.getElementById('contacts-toggle');
    this.headerContacts = document.getElementById('header__contacts');

    // Стан контактів
    this.isVisible = !this.headerContacts.classList.contains(
      'header__contacts--hidden',
    );

    this.init();
  }

  /**
   * Ініціалізація обробників подій
   */
  init() {
    if (this.contactsToggle) {
      this.contactsToggle.addEventListener('click', () => this.toggle());
    }

    // Закриття при кліку поза блоком контактів
    document.addEventListener('click', (e) => {
      const isClickInsideContacts = this.headerContacts.contains(e.target);
      const isClickOnToggle = this.contactsToggle.contains(e.target);

      if (this.isVisible && !isClickInsideContacts && !isClickOnToggle) {
        this.toggle();
      }
    });

    // Закриття при натисканні Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isVisible) {
        this.toggle();
      }
    });
  }

  /**
   * Перемикання стану блоку контактів
   */
  toggle() {
    this.headerContacts.classList.toggle('header__contacts--hidden');

    this.isVisible = !this.headerContacts.classList.contains(
      'header__contacts--hidden',
    );

    this.contactsToggle.setAttribute('aria-expanded', this.isVisible);

    return this.isVisible;
  }

  /**
   * Приховування блоку контактів
   */
  hide() {
    if (this.isVisible) {
      this.toggle();
    }
  }
}
