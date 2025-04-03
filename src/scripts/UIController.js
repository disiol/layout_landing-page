/**
 * Клас для керування UI елементами та їх взаємодією
 */
'use strict';

export default class UIController {
  constructor() {
    // Об'єкт для збереження посилань на UI компоненти
    this.components = {};

    // Створення оверлею
    this.overlay = this.createOverlay();
  }

  /**
   * Реєстрація компонента в контролері
   * @param {string} name - назва компонента
   * @param {Object} component - екземпляр компонента
   */
  registerComponent(name, component) {
    this.components[name] = component;

    // Для меню встановлюємо посилання на оверлей
    if (name === 'menu' && typeof component.setOverlay === 'function') {
      component.setOverlay(this.overlay);
    }
  }

  /**
   * Створення та налаштування оверлею
   * @returns {Object} - об'єкт для керування оверлеєм
   */
  createOverlay() {
    // Створюємо оверлей з BEM класом
    const overlay = document.createElement('div');

    overlay.classList.add('page-overlay');

    // Додаємо стилі для оверлею
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    overlay.style.zIndex = '900';
    overlay.style.opacity = '0';
    overlay.style.visibility = 'hidden';
    overlay.style.transition = 'opacity 0.3s ease-in-out, visibility 0.3s';

    document.body.appendChild(overlay);

    // Додаємо обробник кліку на оверлей
    overlay.addEventListener('click', () => {
      // Закриваємо меню при кліку на оверлей
      if (this.components.menu) {
        this.components.menu.close();
      }
    });

    return {
      element: overlay,
      show: () => {
        overlay.style.opacity = '1';
        overlay.style.visibility = 'visible';
      },
      hide: () => {
        overlay.style.opacity = '0';
        overlay.style.visibility = 'hidden';
      },
    };
  }
}
