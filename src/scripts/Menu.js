/**
 * Клас для керування меню сайту з використанням BEM методології
 */
'use strict';
export default class Menu {
  constructor() {
    // DOM елементи
    this.menuToggle = document.getElementById('header__menu-toggle');
    this.menu = document.getElementById('menu');
    this.menuClose = document.getElementById('menu-close');
    this.menuLinks = document.querySelectorAll('.menu__link');

    // Посилання на оверлей, що буде ініціалізований через UIController
    this.overlay = null;

    // Стан меню
    this.isOpen = false;

    this.init();
  }

  /**
   * Ініціалізація обробників подій
   */
  init() {
    if (this.menuToggle) {
      this.menuToggle.addEventListener('click', () => this.toggle());
    }

    if (this.menuClose) {
      this.menuClose.addEventListener('click', () => this.close());
    }

    // Додаємо обробники для пунктів меню
    this.menuLinks.forEach((link) => {
      link.addEventListener('click', (event) => {
        if (link.getAttribute('href').startsWith('#')) {
          // Для посилань-якорів
          const targetId = link.getAttribute('href').substring(1);
          const targetElement = document.getElementById(targetId);

          if (targetElement) {
            this.close();

            // Плавний скрол до секції після закриття меню
            setTimeout(() => {
              targetElement.scrollIntoView({
                behavior: 'smooth',
              });
            }, 300);
          }
        }
      });
    });

    // Обробник клавіатури для доступності
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) {
        this.close();
      }
    });
  }

  /**
   * Встановлення посилання на оверлей з UIController
   * @param {Object} overlay - об'єкт оверлею
   */
  setOverlay(overlay) {
    this.overlay = overlay;
  }

  /**
   * Перемикання стану меню
   */
  toggle() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  /**
   * Відкриття меню
   */
  open() {
    this.menu.classList.add('menu--open');
    this.menuToggle.setAttribute('aria-expanded', 'true');
    document.body.classList.add('body--no-scroll');

    if (this.overlay) {
      this.overlay.show();
    }

    this.isOpen = true;

    // Фокус на кнопку закриття для доступності
    setTimeout(() => {
      if (this.menuClose) {
        this.menuClose.focus();
      }
    }, 300);
  }

  /**
   * Закриття меню
   */
  close() {
    this.menu.classList.remove('menu--open');
    this.menuToggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('body--no-scroll');

    if (this.overlay) {
      this.overlay.hide();
    }

    this.isOpen = false;

    // Повертаємо фокус на кнопку відкриття для доступності
    this.menuToggle.focus();
  }
}
