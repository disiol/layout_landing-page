'use strict';

import Menu from './Menu';
import Contacts from './Contacts';
import UIController from './UIController';

/**
 * Ініціалізація додатку при завантаженні DOM
 */
document.addEventListener('DOMContentLoaded', () => {
  // Створюємо основний контролер UI
  const uiController = new UIController();

  // Ініціалізуємо компоненти
  console.log('Begin the Met website initialized');

  const menu = new Menu();
  const contacts = new Contacts();

  // Реєструємо компоненти в контролері
  uiController.registerComponent('menu', menu);
  uiController.registerComponent('contacts', contacts);

  // Можна додати додаткову логіку ініціалізації тут
  console.log('The Met website initialized');
});
