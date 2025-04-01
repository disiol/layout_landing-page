'use strict';

export class Contacts {
  constructor() {
    this.contactsIcon = document.getElementById('contacts-toggle');
    this.headerContactsHidden = 'header__contacts--hidden';
    this.contacts = document.getElementById('header__contacts');
    this.isContactsOpen = false;
    this.headerContactsShow = 'header__contacts-show';
  }

  init() {
    this.contactsIcon.addEventListener('click', () => this.show());

    document.addEventListener('click', (event) =>
      this.closeOnOutsideClick(event),
    );
  }

  show() {
    if (!this.isContactsOpen) {
      this.contacts.classList.add(this.headerContactsShow);
      this.contacts.classList.remove(this.headerContactsHidden);
      this.isContactsOpen = true;
    }
  }

  closeOnOutsideClick(event) {
    if (this.isContactsOpen && !event.target.closest('#contacts-toggle')) {
      this.isContactsOpen = false;
      this.contacts.classList.remove(this.headerContactsShow);
      this.contacts.classList.add(this.headerContactsHidden);
    }
  }
}
