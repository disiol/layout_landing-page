'use strict';

import { UIController } from './UIController.js';
import { Contacts } from './Contacts.js';
import { Menu } from './Menu.js';

document.addEventListener('DOMContentLoaded', () => {
  const contacts = new Contacts();
  const menu = new Menu();
  const uiController = new UIController(contacts, menu);

  uiController.init();
});
