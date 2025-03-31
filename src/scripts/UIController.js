export class UIController {
  constructor(contacts, menu) {
    this.contacts = contacts;
    this.menu = menu;
  }

  init() {
    this.contacts.init();
    this.menu.init();
  }
}
